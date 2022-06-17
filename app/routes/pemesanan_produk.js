import express from 'express';
import cron, { CronJob }  from 'cron';

import {updateDataEveryday, getProductOrders, addProductOrders, checkoutOrder, getAcceptedOrders, getNotAcceptedOrders, acceptPay, getCatatanPemasukan, getbydate, sendMail} from '../controllers/pemesanan_produk.js'

const router = express.Router();

router.get('/', getProductOrders);
router.post('/', addProductOrders);

//pemesanan_produk_id, metode pembayaran, nama, kota, kecamatan, alamat, nohp
router.post('/checkout', checkoutOrder);


// router.get('/payment')
router.get('/accepted', getAcceptedOrders)
router.get('/not-accepted', getNotAcceptedOrders)
//payment_id
router.post('/accept-payment', acceptPay)

router.get('/berhasil', getCatatanPemasukan)

router.get('/updatemanual', updateDataEveryday)

router.get('/getmoneytoday', getbydate)

router.get('/sendmailer', sendMail)

export default router