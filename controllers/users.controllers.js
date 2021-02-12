const UsersModels = require("../models/users.models");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readUser = (req, res) => {
    UsersModels.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
};

module.exports.createUser = async (req, res) => {
    const newUser = new UsersModels({
        name: req.body.name,
    });
    try {
        const user = await newUser.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(400).send(err);
    }
}
