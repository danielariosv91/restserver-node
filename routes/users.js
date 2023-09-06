import { Router } from 'express';
import { deleteUsers, getUsers, patchUsers, postUsers, putUsers } from '../controllers/users.js';

const router = Router();

router.get('/', getUsers);
router.post('/', postUsers);
router.patch('/', patchUsers);
router.put('/:id', putUsers);
router.delete('/', deleteUsers);

export {
    router,
    Router
}