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

var users = [
    User("johndoe", "1/1/2000", '18', 'johndoe@domain.com', 'qwerty', true), 
    User("janedoe", "19/10/2000", '18', 'janedoe@domain.com', 'password', true), 
    User("bobhawke", "11/03/1929", '89', 'hawkey@domain.com', 'labor', false)
]

module.exports = function(req, res) {
    console.log("auth api accessed");
}