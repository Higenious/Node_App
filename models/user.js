const mongoose     =    require('mongoose');
mongoose.Promise   =    Promise;
var Schema         =    mongoose.Schema;


var user   =  new Schema({
        name         : { type :String,  required: true},
        lastname     : { type :String,  required : true},
        mobileNumber : { type : Number,  required : true},
        email        : { type :String,  required :true}, 
        password     : { type : String,   required: true},
        createdDate  : { type : Date,    default:Date.now  },


})
// Exportr module
module.exports.user = mongoose.model('user',user);