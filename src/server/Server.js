import logger from 'morgan';
import router from "../router";

require('dotenv').config()

export default class Server {
    constructor(app) {
        this.app = app;
    }

    config() {
        // Log
        this.app.use(logger('dev'));

        // Routes
        this.app.use('/api', router);
    }
}