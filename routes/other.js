
const { Router } = require('express');
const router = Router();

router.get('/', function (req, res) {
    console.log("OTHER!!!")
});

module.exports = router;
