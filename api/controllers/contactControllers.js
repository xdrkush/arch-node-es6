import fakedb from "../../config/fakedb.js";

export default {
    getPage: (req, res) => {
        console.log('Contact::getPage')
        try {
            res.render('pages/contact')
        } catch (error) {
            res.status(418).json({
                message: "Du sucre avec ton thé ?"
            })
        }
    },
    post: (req, res) => {
        console.log('Contact::post', req.body)
        try {
            res.render('pages/contact', {
                flash: `Bonjour ${req.body.title}, de la part du controllers !`
            })
        } catch (error) {
            res.status(418).json({
                message: "Du sucre avec ton thé ?"
            })
        }
    },
}
