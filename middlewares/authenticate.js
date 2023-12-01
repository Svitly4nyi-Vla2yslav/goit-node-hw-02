const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");


const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
        next(HttpError(401, "bearer"))
    }
    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(id);
        if (!user) {
           return next(HttpError(401, "user"))
        }
       return next();
    } catch {
        next(HttpError(401, "try catch"))
    }
};

module.exports = authenticate;

