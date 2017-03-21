const crypto = require('crypto');

let hashPassword = password => {
    return crypto.createHash('md5').update(password).digest("hex");
}

module.exports = hashPassword;
