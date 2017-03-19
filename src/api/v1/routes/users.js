const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('Users Index!');
});

export default router;
