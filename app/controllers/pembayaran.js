import { pembayaranSchema } from '../models/pembayaran.js'
import { productOrderSchema } from '../models/product_orders.js'
import { userSchema } from '../models/users.js';
import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()

export const addBuktiPembayaran = async (req, res) => {
  try {
    // GET REQUEST BODY
    const {user_id, pembayaran_id, url_foto} = req.body;

    // MASUKAN GAMBAR KEDALAM PEMBAYARAN
    const tambahGambar = await pembayaranSchema.findOneAndUpdate({_id: pembayaran_id}, {
      $set: {
        bukti_pembayaran: url_foto
      }
    })
    console.log(tambahGambar.pemesanan_produk_id)

    //MENAMBAHKAN TANGGAL PEMBAYARAN
    const productOrder = await productOrderSchema.findOneAndUpdate({_id: tambahGambar.pemesanan_produk_id}, {
      $set: {
        'pembayaran.tanggal_pembayaran': new Date() 
      }
    })

    // console.log(productOrder.daftar_barang[].product_id)
    //MENAMBAHKAN RATING PRODUK KOSONG KE USER
    let urating = [], rate = {}
    // rate.product_id = productOrder.daftar_barang[0].product_id;
    // rate.rating = 0;
    // console.log(rate)
    for(let i = 0; i < productOrder.daftar_barang.length; i++){
      rate.product_id = productOrder.daftar_barang[i].product_id;
      rate.rating = 0;
      urating.push(rate)
    }
    const userRating = await userSchema.updateOne({_id: user_id}, {
      $push: {
        user_products_rating: {
          $each: urating
      }}
    })

    //MENGIRIM EMAIL KE PEMILIK
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SENDER_EMAIL, // generated ethereal user
        pass: process.env.SENDER_PASSWORD,
      },
    })

    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: process.env.RECEIVER_EMAIL, // list of receivers
      subject: "PEMESANAN BARU", // Subject line
      text: `
        PEMASANAN BARU OLEH: ${tambahGambar.nama}
      `, // plain text body
      html: `
      <h1>PEMESANAN BARU</h1>
      <h3>${tambahGambar.nama} telah melakukan pemesanan</h3>
      <p>alamat: ${tambahGambar.kota}, ${tambahGambar.alamat}</p>
      <p>nomor HP: ${tambahGambar.no_hp}</p>
      <p>Metode Pembayaran: ${tambahGambar.metode_pembayaran}</p>
      <p>Jumlah Tranksaksi: ${tambahGambar.jumlah_pembayaran}</p></br>
      <a href="${url_foto}"><h3>Bukti Pembayaran</h3></a>
      `, // html body
    });

    res.json({
      status: true,
      message: "Bukti Pembayaran Added",
      result: tambahGambar
    })
  } catch (error) {
    res.json({
      status: false,
      message: "Something Went Wrong",
      result: error
    })
  }
}

export const getPayment = async (req, res) => {
  try {
    let payment;
    console.log(req.id)
    if(req.params.id !== undefined){
      payment = await pembayaranSchema.findOne({_id: req.params.id})
    }else{
      payment = await pembayaranSchema.find()
    }
    console.log(`test: ${payment}`)
    res.json(payment)
  } catch (error) {
    res.json(payment)
  }
}