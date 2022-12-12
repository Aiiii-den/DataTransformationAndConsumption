const express = require('express');
const router = express.Router();

// eine GET-Anfrage
router.get('/fiw', async(req, res) => {

    res.send({ message: "Test" });
});

module.exports = router;
