import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
    response.json({
        message: 'GET '
    })
})
router.put('/', (request, response) => {
    response.json({
        message: 'PUT '
    })
})
router.patch('/', (request, response) => {
    response.json({
        message: 'PATCH '
    })
})
router.post('/', (request, response) => {
    response.json({
        message: 'POST '
    })
})
router.delete('/', (request, response) => {
    response.json({
        message: 'DELETE '
    })
})


export {
    router,
    Router
}