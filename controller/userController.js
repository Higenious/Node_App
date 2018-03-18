var  express     =  require('express');


function createUser(req,  res){
    //console.log('user creating called');
    res.send('Hi Chetan create user herer');

}



function getAlluser(req, res){
    res.send('Doin Well ');
}



//exports
module.exports.createUser  = createUser;
exports.getAlluser         = getAlluser;