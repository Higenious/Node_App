var  express        =  require('express');
var userServices    =  require('../services/userServices.js');
var bodyParser      = require('body-parser');



function createUser(req,  res){
    try {
        var reqBody = req.body;
        userServices.createUser(reqBody,
            function (successData) {
                res.send(successData);
            }, function (errorData) {
                res.send(errorData);
            })
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}










function getAlluser(req, res){
    res.send('Doin Well ');
}



//exports
module.exports.createUser  = createUser;
exports.getAlluser         = getAlluser;