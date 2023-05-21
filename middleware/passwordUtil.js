const hashing = require('crypto') //not encrptable
const bcrypt = require('bcryptjs'); //encrptable
const hashpassword = (password) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
}
const validatePassword = (passwordV1, passwordV2) => {
    return bcrypt.compareSync(passwordV1, passwordV2);
}
module.exports = {hashpassword, validatePassword}