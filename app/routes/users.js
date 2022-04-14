import express from 'express';
import { appendFile } from 'fs';

import {getUsers, createUser, getUser, updateUser, deleteUser} from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:name', getUser)

router.delete('/:name', deleteUser)

router.patch('/:name', updateUser)

export default router