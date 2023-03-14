const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/phone')

const Mobile = mongoose.model('Mobile',{
    id:String,
    name:String,
    image:String,
    price:Number,
    waranty:String,
    Charger:String,
    memory:String,
    ram:String

})

module.exports={
    Mobile
}