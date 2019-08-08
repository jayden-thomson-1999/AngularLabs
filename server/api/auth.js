/* eslint-disable no-console */
class User {
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;   //string
        this.birthdate = birthdate; //string
        this.age = age;             //number
        this.email = email;         //string
        this.password = password;   //string
        this.valid = valid;         //boolean
    }
}

module.exports = function(req, res) {
    console.log("auth api accessed");
}