export default class TestMD {
    async checkHeader(req, res, next) {
        console.log('MD header', req.headers)
        if (req.headers) next()
        else res.status(204).json({message: "Une erreur est survenu !"})
    }
}