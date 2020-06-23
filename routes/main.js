
const multerUpload = require('./../utils/multer');
const userController = require('./../controllers/user');
const { Router } = require('express');
const router = Router();

router.get('/', function (req, res) {
    console.log("Works!!!");

    return res.json({
        error: false,
        message: "Root URL",
    });
});

router.get('/users', userController.getUsers);

router.post('/upload-image', multerUpload.single('image'), userController.uploadImage);

module.exports = router;
