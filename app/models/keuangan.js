import mongoose from 'mongoose';

const KeuanganSchema = mongoose.Schema({
  //pemesanan_produk_id, metode pembayaran, nama, kota, kecamatan, alamat, nohp

  tanggal: {
    type: Date
  },
  pemasukan: {
    type: Number
  }

  // daftar_trankasaksi: [],
  // total_pemasukan: {
  //   type: Number,
  //   default: 0,
  // }
}, {collection: 'keuangan'})

export const keuanganSchema = mongoose.model('KeuanganSchema', KeuanganSchema)