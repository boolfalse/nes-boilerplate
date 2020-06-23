
const multer = require('multer');
const path = require('path');

module.exports = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, './../uploads'));
        },
        filename: function (req, file, cb) {
            cb(null, (new Date().getTime()/1000|0) + '_' + file.originalname);
        }
    }),
    limits: {
        fileSize: 1024 * 1024 * 2 // MB
    },
    fileFilter: (req, file, cb) => {
        let valid = (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png');
        cb(null, valid);
    },
});
