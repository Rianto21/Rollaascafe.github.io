import { pembayaranSchema } from '../models/pembayaran.js'
import { productOrderSchema } from '../models/product_orders.js'

export const addBuktiPembayaran = async (req, res) => {
  try {
    const {pembayaran_id, url_foto} = req.body;
    const tambahGambar = await pembayaranSchema.findOneAndUpdate({_id: pembayaran_id}, {
      $set: {
        bukti_pembayaran: url_foto
      }
    })
    console.log(tambahGambar.pemesanan_produk_id)
    const productOrder = await productOrderSchema.updateOne({_id: tambahGambar.pemesanan_produk_id}, {
      $set: {
        'pembayaran.tanggal_pembayaran': new Date() 
      }
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