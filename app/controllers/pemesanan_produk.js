import { productOrderSchema } from '../models/product_orders.js'
import { userSchema } from '../models/users.js'
import { pembayaranSchema } from '../models/pembayaran.js'
import { keuanganSchema } from '../models/keuangan.js'
import moment from 'moment'
import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()
// import timezone from 'moment-timezone'

export const addProductOrders = async (req, res) => {
  
  try {
    const {user_id, daftar_barang, lokasi_pengiriman} = req.body;
    let totalH = 0;
    let daftar_barang_id = [];
    for (let index = 0; index < daftar_barang.length; index++) {
      totalH = totalH + daftar_barang[index]['total_harga_produk'];
      daftar_barang_id.push(daftar_barang[index]['product_id'])
    }
    console.log(daftar_barang.length, totalH, '\n', daftar_barang_id)
    const res_po = new productOrderSchema({
        daftar_barang: daftar_barang,
        total_harga: totalH,
        pembayaran: {
          kode_pembayaran: false,
          status_pembayaran: false,
          tanggal_pembayaran: false,
        },
      }) 
    await res_po.save()

    const res_u = await userSchema.updateOne({_id: user_id}, { 
      $push: {
        daftar_pemesanan: res_po._id
      },
      // $pull: {
      //   keranjang_belanja:{'id_barang': {$in: [daftar_barang_id]}} 
      // }
    })

    const res_push = await userSchema.updateOne({_id: user_id}, {
      $pull: {
        keranjang_belanja:{'id_barang': {$in: daftar_barang_id}} 
      }
    })

    res.json({
      message: "data added",
      result: res_po,
    })
  } catch (error) {
    res.json({
      status: false,
      result: error,
    })
  }
}

export const getProductOrders = async (req, res) => {
  try {
    const productOrder = await productOrderSchema.find()

    res.json({
      status: true,
      message: "OK",
      result: productOrder,
    })
  } catch (error) {
    res.json({
      status: false,
      result: error,
    })
  }
}

export const sendMail = async (req, res) => {
  try {
    // const testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SENDER_EMAIL, // generated ethereal user
        pass: process.env.SENDER_PASSWORD,
      },
    })
    const ss = [{
      product_id: 222,
      price: 200000
    },
    {
      product_id: 223,
      price: 300000
    }
  ]
    const user = "Mikee Mohedeee"
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: process.env.RECEIVER_EMAIL, // list of receivers
      subject: "PEMESANAN BARU", // Subject line
      text: `
        TERDAPAT PEMESANAN YANG BARU MASUK DENGAN KETERANGAN:
      `, // plain text body
      html: `
      <h1>PEMESANAN BARU</h1>
      <h3>${user} telah melakukan pemesanan</h3></br>
      <p>daftar produk:</p></br>
      <p>${ss}</p>
      `, // html body
    });

    // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.json(info)
  } catch (error) {
    res.json(error)
  }
}

export const checkoutOrder = async (req, res) => {
  try {
    const {pemesanan_produk_id, metode_pembayaran, jumlah_pembayaran, nama, kota, alamat, no_hp} = req.body;
    const payment = new pembayaranSchema({
      pemesanan_produk_id: pemesanan_produk_id,
      metode_pembayaran: metode_pembayaran,
      jumlah_pembayaran: jumlah_pembayaran,
      nama: nama,
      kota: kota,
      alamat: alamat,
      no_hp: no_hp  
    })

    await payment.save()

    const product_order = await productOrderSchema.updateOne({_id: pemesanan_produk_id}, {
      $set: { 'pembayaran.kode_pembayaran': payment._id }
    });

    res.json({
      status: true,
      message: "data added to payment",
      result: payment
    })
  } catch (error) {
    res.json({
      status: false,
      result: error
    })
  }
}

export const getAcceptedOrders = async (req, res) => {
  try {
    const productOrder = await productOrderSchema.find({'pembayaran.status_pembayaran': true })

    res.json({
      status: true,
      message: "OK",
      result: productOrder
    })
  } catch (error) {
    res.json({
      status: false,
      result: error
    })
  }
}

export const getNotAcceptedOrders = async (req, res) => {
  try {
    const productOrder = await productOrderSchema.find({'pembayaran.status_pembayaran': false })

    res.json({
      status: true,
      message: "OK",
      result: productOrder
    })
  } catch (error) {
    res.json({
      status: false,
      result: error
    })
  }
}

export const acceptPay = async (req, res) => {
  try {
    const productOrder = await productOrderSchema.findOneAndUpdate({_id: req.body.pemesanan_produk_id},
      {$set: {'pembayaran.status_pembayaran': true}}
    )
    const today = moment().add(1, 'd').startOf('day').subtract(17, 'h');

    const keuanganAdd = await keuanganSchema.updateOne({tanggal: {
      $gte: today.toDate(),
      $lte: moment(today).endOf('day').add(7, "h").toDate()
    }}, {
      $inc: {pemasukan: productOrder.total_harga}
    })

    res.json({
      status: true,
      message: "OK",
      result: productOrder
    })
  } catch (error) {
    res.json({
      status: false,
      result: error
    })
  }
}


export const getCatatanPemasukan = async (req, res) => {
  try {
    const dataKeuangan = await keuanganSchema.find({});
    
    // let dataKeuangan = []
    // const productOrder = await productOrderSchema.find({'pembayaran.status_pembayaran': true })

    // for (let index = 0; index < productOrder.length; index++) {
    //   dataKeuangan.push({'pemasukan': productOrder[index]['total_harga'],
    // 'tanggal_pembayaran': productOrder[index]['pembayaran']['tanggal_pembayaran'].toISOString().split('T')[0]
    // })
    // console.log(dataKeuangan);
      
    // }
    res.json({
      status: true,
      message: "OK",
      result: dataKeuangan
    })
  } catch (error) {
    res.json({
      status: false,
      result: error
    })
  }
}

export const getbydate = async (req, res) => {
  try {
    const today = moment().add(1, 'd').startOf('day').subtract(17, 'h')
    // console.log(`${today.toDate()}\n${moment(today).endOf('day').toDate()}`);
    console.log(today.toDate())
    console.log(moment(today).endOf('day').add(7, 'h').toDate())
    const keuanganAdd = await keuanganSchema.find({tanggal: {
      $gte: today.toDate(),
      $lte: moment(today).endOf('day').add(7, 'h').toDate()
    }})
    res.json(keuanganAdd)
  } catch (error) {
    res.json(error)
  }
}

export const updateDataEveryday = async (req, res) => {
  // console.log("hellooooo")
  try {
    // moment.tz.setDefault("Asia/Jakarta")
    const today = moment().add(1, 'days').startOf('day').subtract(16, 'h');
    console.log(`${today.toDate()}`)
    const addKeuangan = await keuanganSchema.create({
      tanggal: today.toDate(),
      pemasukan: 0
    })
    console.log(addKeuangan)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}
