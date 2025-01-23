const bcrypt = require('bcrypt');

//hash  function
exports.hashPassword = async (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })

}

//compare function||decrypt function
exports.comparePassword = async (password, hash) => {
    return bcrypt.compare(password, hash)
}