import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const Product_order_Schema = mongoose.Schema({
  daftar_barang: [{
    product_id: {
      type: mongoose.Schema.Types.ObjectId },
    jumlah: {
      type: Number
    }
}],
  total_harga: {
    type: Number
  },
  pembayaran: {
    type: Object
  }
}, {collection: 'product_orders'})

export const productOrderSchema = mongoose.model('ProductOrderSchema', Product_order_Schema)
