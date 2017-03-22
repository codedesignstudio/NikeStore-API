const crypto = require('crypto');

let hashPassword = password => crypto.createHash('md5').update(password).digest("hex");

module.exports = hashPassword;
