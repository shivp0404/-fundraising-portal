const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Name is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    refferalcode: {
        type: String,
        unique: true,
        required: [true, "Referral code is required"]
    },
    totaldonation: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("User", UserSchema);
