
const {
    User,
} = require('../models');



const uploadImage = (req, res, next) => {
    console.log(req.file);

    res.status(201).json({
        success: true,
        message: "Image was successfully uploaded.",
    });
};



module.exports = {
    uploadImage,
};
