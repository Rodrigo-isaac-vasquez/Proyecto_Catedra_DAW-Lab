const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    local:{
        email: String,
        password: String
    },
    google:{
        email: String,
        password: String,
        id: String,
        token: String
    }
});

userSchema.method.generateHash = function (password){
    return bcrypt.hashSync(password, bycript.genSaltSync(8), null);
};

userSchema.method.validatePassword = function (password){
return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);