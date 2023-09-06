import express from 'express';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        /** App Routes */
        this.routes();
    }

    middlewares = () => {
        /** Public Directory */
        this.app.use(express.static('public'));
    }

    routes = () => {
        this.app.get('/api', (request, response) => {
            response.json({
                message: 'GET API'
            })
        })
        this.app.put('/api', (request, response) => {
            response.json({
                message: 'PUT API'
            })
        })
        this.app.patch('/api', (request, response) => {
            response.json({
                message: 'PATCH API'
            })
        })
        this.app.post('/api', (request, response) => {
            response.json({
                message: 'POST API'
            })
        })
        this.app.delete('/api', (request, response) => {
            response.json({
                message: 'DELETE API'
            })
        })
    }

    start = () => {
        this.app.listen(this.port, () => {
            console.log(`Running on ${this.port} port`)
        })
    }
}

export {
    Server
}