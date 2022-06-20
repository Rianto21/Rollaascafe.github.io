import { ordertableSchema } from "../models/tables_order.js";
import { userSchema } from "../models/users.js";
import { tableSchema } from "../models/tables.js";

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
      meja_id: req.body.meja_id,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      tanggal_pemesanan: new Date()
    })

    const updateTable = await tableSchema.updateMany({_id: {$in: req.body.daftar_meja}}, {
      $set: {status: false}
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

export const checkAvailable = async (req,res) => {
  try {
    const {meja_id, start_time, end_time} = req.body;
    const check = await ordertableSchema.findOne({meja_id: meja_id, $or: [{start_time: {$gte: start_time, $lt: end_time }}, {end_time: {$gt: start_time, $lte: end_time}}]})
    console.log(check);
    if(check === null){
      res.json({
        status: true,
        available: true,
        data: check
      })
    }else {
      res.json({
        status: true,
        available: false,
        data: check
      })
    }
  } catch (error) {
    res.json(error)
  }

}

export const updateOrderTable = async (req, res) => {
  try {
  const {tables_order_id, start_time, end_time} = req.body

  const updateorderTable = await ordertableSchema.updateOne({tables_order_id}, {
    $set: {
      start_time: start_time,
      end_time: end_time
    }
  })
  res.json(updateorderTable)
  } catch (error) {
    res.json(error)
  }
}

export const deleteTablesOrder = async (req, res) => {
  try {
    const deletedOrder = await ordertableSchema.findByIdAndDelete(req.params.id)
    res.json({
      message: "Data Deleted",
      data: deletedOrder
    })
  } catch (error) {
    res.json(error)
  }
}