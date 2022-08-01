
export default {
    test_md: (req, res, next) => {
        console.log('middleware::test_md')
        next()
    },
    admin: (req, res, next) => {
        console.log('middleware::admin')
        next()
    }
}
