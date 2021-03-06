import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  nama_barang: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  stok: {
    type: Number,
    required: true
  },
  harga: {
    type: Number,
    required: true
  },
  gambar: {
    type: String,
    required: true
  },
  rating_product: {
    type: Object,
    default: {
      "rata_rata": 0,
      "daftar_rating": []
    },
    required: true
  },
  dijual_online: {
    type: Boolean
  }
},
{collection: 'products'})

export const productSchema = mongoose.model('ProductSchema', ProductSchema)