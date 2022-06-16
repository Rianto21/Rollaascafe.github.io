import express from "express";
const router = express.Router();

import { getTables, orderTable, updateTable, addTable, availableTable } from '../controllers/tables.js'
 
router.get('/', getTables)

router.get('/available/:id', availableTable)

router.patch('/order/:id', orderTable)

router.patch('/:id', updateTable)

router.post('/', addTable)

export default router