import express from 'express';

import {addBuktiPembayaran} from '../controllers/pembayaran.js'

const router = express.Router();

//pembayaran_id, urlfoto
router.post('/', addBuktiPembayaran);


export default router