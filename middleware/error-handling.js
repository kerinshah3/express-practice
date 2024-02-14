const errorHandlerMiddleware = (err, req, res, next) => {

    res.status(402).send(err.message)

}
module.exports = errorHandlerMiddleware;
