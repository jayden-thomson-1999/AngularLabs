/* eslint-disable no-console */

var users = [
    {username:"johndoe", birthdate:"1/1/2000", age:'18', 
        email:'johndoe@domain.com', password:'qwerty', valid: false},        
    {username:"janedoe", birthdate:"19/10/2000", age:'18', 
        email:'janedoe@domain.com', password:'password', valid:false}, 
    {username:"bobhawke", birthdate:"11/03/1929", age:'89', 
        email:'hawkey@domain.com', password:'labor', valid:false}
]

module.exports = function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let valid = false    
    
    users.forEach(user => {
        if(user.username === username && user.password === password) {
            user.valid = true;
            valid = true
        }
    });

    res.json({ok: valid});
}