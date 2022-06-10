import { ordertableSchema } from "../models/tables_order";
import { userSchema } from "../models/users";

export const getTablesOrders = async (req, res) => {
  try {
    const tablesorders = await ordertableSchema.find()

    res.json(tablesorders)
  } catch (error) {
    res.json(error)
  }
}

export const getTablesOrder = async (req, res) => {
  try {
    const tablesorder = await ordertableSchema.findById(req.params.id)

    res.json(tablesorder)
  } catch (error) {
    res.json(error)
  }
}

export const addOrderTable = async (req, res) => {
  try {
    const ordertable = await new ordertableSchema({
      nama_pemesan: req.body.nama_pemesan,
      jumlah_orang: req.body.jumlah_orang,
      daftar_meja: req.body.daftar_meja,
      tanggal_pemesanan: req.body.tanggal_pemesanan
    })

    const userOrderTable = await userSchema.updateOne({_id: req.body.user_id}, {
      $push: {
        daftar_pemesanan_meja: ordertable._id
      }
    })
    ordertable.save()

    res.json(ordertable)
  } catch (error) {
    res.json(error)
  }
}

export const updateOrderTable = async (req, res) => {
  try {
    {nama_pemesan, jumlah_orang, daftar_meja, tanggal_pemesanan} req.body

  const updateorderTable = await ordertableSchema.updateOne({_id: req.params.id}, {
    $set: {
      nama_pemesan: nama_pemesan,
      jumlah_orang: jumlah_orang,
      daftar_meja: daftar_meja,
      tanggal_pemesanan: tanggal_pemesanan
    }
  })
  res.json(updateorderTable)
  } catch (error) {
    res.json(error)
  }
}