import mongoose  from "mongoose";

const OrderTableSchema = mongoose.Schema({
  nama_pemesan: {
    type: String
  },
  jumlah_orang: {
    type: Number
  },
  meja_id: {
    type:  mongoose.Schema.Types.ObjectId
  },
  start_time: {
    type: Date
  },
  end_time: {
    type: Date
  },
  tanggal_pemesanan: {
    type: Date
  }
}, {collection: 'table_orders'})

export const ordertableSchema = mongoose.model('OrderTableSchema', OrderTableSchema)