const router = require('express').Router();
const toyRoutes = require('./toy');
const babyRoutes = require('./baby');

router.use('/toy', toyRoutes);
router.use('/baby', babyRoutes);

module.exports = router;