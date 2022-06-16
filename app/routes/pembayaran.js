import express from 'express';

import {addBuktiPembayaran, getPayment} from '../controllers/pembayaran.js'

const router = express.Router();

//pembayaran_id, urlfoto
router.post('/', addBuktiPembayaran);
router.get('/:id', getPayment )
router.get('/', getPayment )

export default router