import TestControllers from './TestControllers';

module.exports = {
    GetTest: (req, res) => new TestControllers(req, res).get(req, res),
    PostTest: (req, res) => new TestControllers(req, res).post(req, res)
}