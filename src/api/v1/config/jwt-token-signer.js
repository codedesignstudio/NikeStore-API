const jwt = require('jsonwebtoken');
import { JWT_TOKEN_SECRET } from './constants';

export default function signJWTToken(user) {
    return jwt.sign(user, 'JWT_TOKEN_SECRET', { expiresIn: '1y' });
}
