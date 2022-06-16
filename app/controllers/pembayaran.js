import { pembayaranSchema } from '../models/pembayaran.js'
import { productOrderSchema } from '../models/product_orders.js'
import { userSchema } from '../models/users.js';

export const addBuktiPembayaran = async (req, res) => {
  try {
    const {user_id, pembayaran_id, url_foto} = req.body;
    const tambahGambar = await pembayaranSchema.findOneAndUpdate({_id: pembayaran_id}, {
      $set: {
        bukti_pembayaran: url_foto
      }
    })
    console.log(tambahGambar.pemesanan_produk_id)

    const productOrder = await productOrderSchema.findOneAndUpdate({_id: tambahGambar.pemesanan_produk_id}, {
      $set: {
        'pembayaran.tanggal_pembayaran': new Date() 
      }
    })

    let urating = [], rate = {}
    for(let i = 0; i < productOrder.daftar_barang.length(); i++){
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