import { String, ObjectId, Int32, Object } from 'mongodb';
import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  nama_barang: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  stok: {
    type: Int32,
    required: true
  },
  harga: {
    type: Int32,
    required: true
  },
  gambar: {
    type: String,
    required: true
  },
  rating_product: {
    type: Object,
    required: true
  },
})