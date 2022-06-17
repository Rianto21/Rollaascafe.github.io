import mongoose from 'mongoose';

const PembayaranSchema = mongoose.Schema({
  //pemesanan_produk_id, metode pembayaran, nama, kota, kecamatan, alamat, nohp

  pemesanan_produk_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  metode_pembayaran: {
    type: String
  },
  jumlah_pembayaran: {
    type: Number
  },
  nama: {
    type: String
  },
  kota: {
    type: String
  },
  alamat: {
    type: String
  },
  no_hp: {
    type: String
  },
  bukti_pembayaran: {
    type: String,
    default: ""
  }
  // daftar_trankasaksi: [],
  // total_pemasukan: {
  //   type: Number,
  //   default: 0,
  // }
}, {collection: 'payments'})

export const pembayaranSchema = mongoose.model('PembayaranSchema', PembayaranSchema)
