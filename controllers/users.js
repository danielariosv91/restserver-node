import { response } from 'express';
import bcryptjs from 'bcryptjs'

import User from '../models/user.js'


const getUsers = (request, response = response) => {

    /** Query params */
    const { limit = '' } = request.query;

    response.json({
        limit,
        message: 'GET Controller'
    })
}

const postUsers = async (request, response) => {
    const { name, email, password, role } = request.body;
    const user = new User({ name, email, password, role });

    /** Verify if email exists */

    /** Hash password */
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    /** Sabe on DB */
    await user.save();

    response.json({
        message: 'POST Controller',
        user
    })
}

const putUsers = (request, response = response) => {

    /** Segment params */
    const { id } = request.params;

    response.json({
        id,
        message: 'PUT Controller',
    })
}

const patchUsers = (request, response = response) => {
    response.json({
        message: 'PATCH Controller'
    })
}
const deleteUsers = (request, response = response) => {
    response.json({
        message: 'DELETE Controller'
    })
}

export {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
}