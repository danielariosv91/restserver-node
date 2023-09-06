import { Router } from 'express';
import { deleteUsers, getUsers, patchUsers, postUsers, putUsers } from '../controllers/users.js';

const router = Router();

router.get('/', getUsers);
router.put('/', postUsers);
router.patch('/', patchUsers);
router.put('/', putUsers);
router.patch('/', deleteUsers);

export {
    router,
    Router
}