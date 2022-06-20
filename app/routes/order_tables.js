import express  from "express";
const router = express.Router()

import { getTablesOrder, getTablesOrders, addOrderTable, updateOrderTable, checkAvailable, deleteTablesOrder} from '../controllers/tables_order.js'

router.get('/', getTablesOrders)

router.get('/check/', checkAvailable)

router.get('/:id', getTablesOrder)

router.post('/', addOrderTable)

router.patch('/:id', updateOrderTable)

router.delete('/:id', deleteTablesOrder)

// router.delete('/:id', deleteTableOrder)

export default router