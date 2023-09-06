import express from 'express';
import cors from 'cors';
import { router } from '../routes/users.js'

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        /** App Routes */
        this.routes();
    }

    middlewares = () => {
        /** Cors */
        this.app.use(cors())

        /** Public Directory */
        this.app.use(express.static('public'));
    }

    routes = () => {
        this.app.use('/api/users', router)
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