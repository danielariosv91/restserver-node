import { Router } from 'express';
import { check } from 'express-validator';
import { deleteUsers, getUsers, patchUsers, postUsers, putUsers } from '../controllers/users.js';
import { validateInput } from '../middlewares/validate-input.js';


const router = Router();

router.get('/', getUsers);

router.post('/', [
    check('name', 'The name is mandatory').not().isEmpty(),
    check('password', 'The password should be 6 characters').isLength({ min: 6 }),
    check('email', 'The email is not valid').isEmail(),
    check('role', 'Is not a role valid').isIn(['ADMIN_ROLE', 'USER_ROLE']), 
    validateInput
], postUsers);

router.patch('/', patchUsers);
router.put('/:id', putUsers);
router.delete('/', deleteUsers);

export {
    router,
    Router
}