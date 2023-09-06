import { response } from 'express'; 
import User from '../models/user.js'


const getUsers = (request, response = response) => {

    /** Query params */
    const { limit = '' } = request.query;

    response.json({
        limit,
        message: 'GET Controller'
    })
}

const postUsers = async (request, response = response) => {
    const body = request.body;
    const user = new User(body);

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