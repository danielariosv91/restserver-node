import { response } from 'express'


const getUsers = (request, response = response) => {
    response.json({
        message: 'GET Controller'
    })
}

const postUsers = (request, response = response) => {
    const body = request.body;

    response.json({
        message: 'POST Controller', 
        body
    })
}

const putUsers = (request, response = response) => {
    response.json({
        message: 'PUT Controller'
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