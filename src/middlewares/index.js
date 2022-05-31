import TestMD from './Test.md'

module.exports = {
    checkHeader: (req, res, next) => new TestMD().checkHeader(req, res, next),
}