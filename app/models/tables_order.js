import mongoose  from "mongoose";

const OrderTableSchema = mongoose.Schema({
  nama_pemesan: {
    type: String
  },
  jumlah_orang: {
    type: Number
  },
  daftar_meja: {
    type:  [mongoose.Schema.Types.ObjectId, {ref: 'table'}]
  },
  tanggal_pemesanan: {
    type: new Date()
  }
}, {collection: 'table_orders'})

export const ordertableSchema = mongoose.model('OrderTableSchema', OrderTableSchema)