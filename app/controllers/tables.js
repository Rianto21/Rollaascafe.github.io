import { tableSchema } from "../models/tables.js";

export const getTables = async(req, res) => {
  const tables = await tableSchema.find()
  res.send(tables)
};

export const addTable = async (req, res) => {
  try {
    const newTable = await new tableSchema({
      jumlah_kursi: req.body.jumlah_kursi,
      keterangan: req.body.keterangan,
      status: true
    })
    newTable.save()
    res.json(newTable)
  } catch (error) {
    res.json(error)
  } 
}

export const updateTable = async (req, res) => {
  try {
    const { jumlah_kursi, keterangan} = req.body

    const UpdateTable = await tableSchema.updateOne({_id: req.params.id}, {
      $set: {jumlah_kursi: jumlah_kursi, keterangan: keterangan}
    })

    res.json(UpdateTable);
  } catch (error) {
    res.json(error)
  }
}

export const orderTable = async (req, res) => {
  try {
    const OrderTable = await tableSchema.updateOne({_id: req.params.id}, {
      $set: {status: false}
    })
    res.json(OrderTable)
  } catch (error) {
    res.json(error)
  }
}