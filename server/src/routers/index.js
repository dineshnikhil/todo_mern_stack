const express = require('express');
const router = express.Router();

const v1ApiRouter = require('./v1/index');
const v2ApiRouter = require('./v2/index');

router.use('/v1', v1ApiRouter);
router.use('/v2', v2ApiRouter);

module.exports = router;
