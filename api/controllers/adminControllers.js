
export default {
    getPage: (req, res) => {
        try {
            res.render('pages/admin', {
                layout: 'admin'
            })
        } catch (error) {
            res.status(418).json({
                message: "Du sucre avec ton thé ?"
            })
        }
    }
}
