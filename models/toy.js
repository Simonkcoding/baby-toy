const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ToySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    imgurl:{
        type:String
    },
    heart:{
        type:Number
    },
    baby:[{
        type: Schema.Types.Mixed,
      ref: "Baby"
    }]
})

module.exports = Toy = mongoose.model('Toy',ToySchema)