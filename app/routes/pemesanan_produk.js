import express from 'express';

import {getProductOrders, addProductOrders, checkoutOrder, getAcceptedOrders, getNotAcceptedOrders, acceptPay, getCatatanPemasukan} from '../controllers/pemesanan_produk.js'

const router = express.Router();

router.get('/', getProductOrders);
router.post('/', addProductOrders);

//pemesanan_produk_id, metode pembayaran, nama, kota, kecamatan, alamat, nohp
router.post('/checkout', checkoutOrder);


// router.patch('/')
//pembayaran_id, foto
// router.patch('/payment', )

// router.get('/payment')
router.get('/accepted', getAcceptedOrders)
router.get('/not-accepted', getNotAcceptedOrders)
//payment_id
router.post('/accept-payment', acceptPay)

router.get('/berhasil', getCatatanPemasukan)

export default router