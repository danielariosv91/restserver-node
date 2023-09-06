import express from 'express';
import cors from 'cors';
import { router } from '../routes/users.js'

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPathRoute = '/api/users'

        this.middlewares();

        /** App Routes */
        this.routes();
    }

    middlewares = () => {
        /** Cors */
        this.app.use(cors());

        /** Read body */
        this.app.use(express.json());

        /** Public Directory */
        this.app.use(express.static('public'));
    }

    routes = () => {
        this.app.use(this.usersPathRoute, router)
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