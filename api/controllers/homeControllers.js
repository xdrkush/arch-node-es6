import fakedb from "../../config/fakedb.js";

export default {
    getPage: (req, res) => {
        try {
            res.render('pages/home', {
                list: fakedb.list,
                users: fakedb.list
            })
        } catch (error) {
            res.status(418).json({
                message: "Du sucre avec ton thé ?"
            })
        }
    }
}
