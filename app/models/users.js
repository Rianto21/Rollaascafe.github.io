import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nama_lengkap: {
    type: String,
    required: true
  },
  description: { 
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  user_role: {
    type: String,
    required: true
  },
  keranjang_belanja: {
    type: [Object],
  },
  daftar_pemesanan: {
    type: [mongoose.Schema.Types.ObjectId, {ref: 'pemesanan'}],
  },
  daftar_pemesanan_meja: {
    type: [mongoose.Schema.Types.ObjectId, {ref: 'pemesanan_meja'}]
  },
  user_products_rating: {
    type: [{
      product_id: {type: mongoose.Schema.Types.ObjectId, reg: 'productSchema' },
      rating: Number
    }]
  },
  status_aktif: {
    type: mongoose.Schema.Types.Boolean,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  last_updates: {
    type: Date,
    required: true,
    default: Date.now
  }
}, 
{collection: 'users'})

export const userSchema = mongoose.model('UserSchema', UserSchema)