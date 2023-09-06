import express from 'express';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
    }

    routes = () => {
        this.app.get('/', (request, response) => {
            res.send('Hello World')
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