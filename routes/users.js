import { Router } from 'express';
import { check } from 'express-validator';
import { deleteUsers, getUsers, patchUsers, postUsers, putUsers } from '../controllers/users.js';


const router = Router();

router.get('/', getUsers);

router.post('/', [
    check('email', 'The email is not valid').isEmail()
], postUsers);

router.patch('/', patchUsers);
router.put('/:id', putUsers);
router.delete('/', deleteUsers);

export {
    router,
    Router
}