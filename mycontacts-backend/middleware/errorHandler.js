const {constants} = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // check if status code passed from controller
    // res.status(400) will be example of passing statusCode in lifecycle o
    // if no statusCode passed, set 500

    switch(statusCode) {
        case constants.VALIDATION:
            res.json({ title: "Validation Failed", message: err.mesage, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.mesage, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.mesage, stackTrace: err.stack });
             break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.mesage, stackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
                res.json({ title: "Server Error", message: err.mesage, stackTrace: err.stack });
                break;
        default:
                console.log("No Error, All Good");
                break;
    }
    
    
};

module.exports = errorHandler;