const bcrypt = require('bcrypt')

const password = '1234Sure!'  //*! Never in plane text

bcrypt.hash(password, 4, (err, hash) => {
    console.log(hash)

    bcrypt.compare(password, hash, (err, res) => { //* The hash can be created by this pwd?
        console.log(res)
    })
})
