const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { jwtPrivateKey } = require("../config/app-config");

module.exports = function (req, res, next) {
	const headerData = req.header("authorization");
	if (!headerData) throw boom.unauthorized();
	const token = headerData.replace("Bearer", "").trim();
	if (!token) throw boom.unauthorized();

	//if the token is not valid, jwt.verify() will throw an exception, that's why we need a try catch block
	try {
		const decoded = jwt.verify(token, jwtPrivateKey);
		req.user = decoded;
		next();
	} catch (err) {
		next(boom.badRequest("Invalid token"));
	}
};
