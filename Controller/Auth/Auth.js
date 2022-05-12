const userModel = require('../../src/Models/user');
const Auth = () => {
    return {
        register: async (req, res) => {
            try {
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
                // This is called middleware 
                // Here our JWT TOKEN will come
                // Generating the TOKEN
                // generateAuthToken is returning a promise to us
                const token = await user.generateAuthToken();
                const data = await user.save();
                res.render('Home');
            } catch (error) {
                res.status(500).json({success:false,message:error})
            }
        },
        login: async (req, res) => {
            // const id = req.params.id;
            // const user = await userModel.findById(id);
            // const token = await = user.generateAuthToken();
            const email = req.body.email;
            const user = await userModel.findOne({email:email})
            const token = await user.generateAuthToken();
            console.log(token);
            res.status(200).json({ success: true, message: user })
        }
    };
};
module.exports = Auth;