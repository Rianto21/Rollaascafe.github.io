import { productOrderSchema } from '../models/product_orders.js'
import { userSchema } from '../models/users.js'
import { pembayaranSchema } from '../models/pembayaran.js'
import { keuanganSchema } from '../models/keuangan.js'

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
        lokasi_pengiriman: lokasi_pengiriman
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

export const checkoutOrder = async (req, res) => {
  try {
    const {pemesanan_produk_id, metode_pembayaran, jumlah_pembayaran, nama, kota, kecamatan, alamat, nohp} = req.body;
    const payment = new pembayaranSchema({
      pemesanan_produk_id: pemesanan_produk_id,
      metode_pembayaran: metode_pembayaran,
      jumlah_pembayaran: jumlah_pembayaran,
      nama: nama,
      kota: kota,
      kecamatan:  kecamatan,
      alamat: alamat,
      no_hp: nohp
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
    const productOrder = await productOrderSchema.updateOne({_id: req.body.pemesanan_produk_id},
      {$set: {'pembayaran.status_pembayaran': true}}
    )

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
    let dataKeuangan = []
    const productOrder = await productOrderSchema.find({'pembayaran.status_pembayaran': true })

    for (let index = 0; index < productOrder.length; index++) {
      dataKeuangan.push({'pemasukan': productOrder[index]['total_harga'],
    'tanggal_pembayaran': productOrder[index]['pembayaran']['tanggal_pembayaran'].toISOString().split('T')[0]
    })
    console.log(dataKeuangan);
      
    }

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
