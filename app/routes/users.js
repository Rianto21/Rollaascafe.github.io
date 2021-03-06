import express from 'express';
import { appendFile } from 'fs';

import { getUser, matchUser, createUser, getUsers, deleteUser, updateUser, getUserOrder, getUserCart, 
  addUserCart, updateUserCart, getUserTabOrder, getUserName, getUserRating, updateUserRating } from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers) 

router.post('/', createUser)

router.post('/validation', matchUser)

router.get('/:id', getUser)

router.get('/name/:name', getUserName)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

router.get('/order/:id', getUserOrder)

router.get('/cart/:id', getUserCart)

router.post('/cart/:id', addUserCart)

router.patch('/cart/:id', updateUserCart)

router.delete('/cart/:id', updateUserCart)

router.get('/taborder/:id', getUserTabOrder)

router.get('/urating/:id', getUserRating)

router.patch('/urating/:id', updateUserRating)

// router.get('/alreadybought', )

// router.patch('/cart/:id', pkg.updateUserCart)

// router.patch('/taborder/:id', pkg.updateUserTabOrder)

export default router
