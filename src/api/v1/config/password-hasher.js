const crypto = require('crypto');

export default function hashPassword(password) {
    return crypto.createHash('md5').update(password).digest("hex");
}
