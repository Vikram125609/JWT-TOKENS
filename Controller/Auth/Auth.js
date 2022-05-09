const userModel = require('../../src/Models/user');
const Auth = () => {
    return {
        register: async (req, res) => {
            const user = new userModel({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.email,
                question: req.body.question,
                answer: req.body.answer,
                phone: req.body.phone,
                gender: req.body.gender
            });
            const data = await user.save();
            res.status(200).json({ success: true, message: data });
        },
        login: async (req, res) => {
            const id = req.params.id;
            const user = await userModel.findById(id);
            res.status(200).json({ success: true, message: user })
        }
    };
};
module.exports = Auth;