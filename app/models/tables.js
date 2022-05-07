import mongoose from 'mongoose';

const TableSchema = mongoose.Schema({
  jumlah_kursi: {
    type: Number
  },
  keterangan: {
    type: String
  },
  status: {
    type: mongoose.Schema.Types.Boolean
  }
}, {
  collection: 'tables'
})

export const tableSchema = mongoose.model('TableSchema', TableSchema)