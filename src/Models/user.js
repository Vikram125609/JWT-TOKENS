const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    question: {
        type: String,
    },
    answer: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });
Schema.methods.generateAuthToken = async function () {
    try {
        // Here in the sign function we need to pass the unique identifier
        // Here toString function is working in my case but not working with the thapa technical
        const thapa = jwt.sign({ _id: this._id.toString() }, 'Thisisoursecretkeyofminimum32characters');
        this.tokens = this.tokens.concat({token:thapa})
        await this.save();
        return thapa;
    } catch (error) {
        console.log(error);
    }
};
const Models = mongoose.model("user", Schema);
module.exports = Models;
