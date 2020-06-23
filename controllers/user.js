
const {
    User,
} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const uploadImage = (req, res, next) => {
    // console.log(req.file);

    res.status(201).json({
        error: false,
        message: "Image was successfully uploaded.",
    });
};

const getUsers = async (req, res, next) => {
    const users = await User.findAll({
        where: {
            email: {
                [Op.like]: '%' + req.query.email + '%'
            }
        }
    });

    res.status(201).json({
        error: false,
        data: users,
    });
};



module.exports = {
    getUsers,
    uploadImage,
};
