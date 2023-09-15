    const express = require('express');
    const homeController =require('./controllers/homeControllers');

    const router = express.Router();
    router.get('/', homeController.index);
    module.exports = router;
    