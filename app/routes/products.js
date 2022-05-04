import express from 'express';

import {getProducts, getProductNama, createProduct, getProduct, deleteProduct, updateProduct} from '../controllers/products.js'

const router = express.Router();

router.get('/', getProducts)

router.post('/', createProduct)

router.get('/:id', getProduct)

router.get('/nama/:nama', getProductNama)

router.delete('/:id', deleteProduct)

router.patch('/:id', updateProduct)

export default router