import { Express } from "express";

const router = Express.Router()

router.get('/', getTablesOrders)

router.get('/:id', getTablesOrder)

router.post('/', addOrderTable)

router.patch('/:id', updateOrderTable)

router.delete('/:id', deleteTableOrder)