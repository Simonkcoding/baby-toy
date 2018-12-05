const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BabySchema = new Schema({
    name:{
        type:String
    },
    imgurl:{
        type:String
    },
    love:{
        type:String
    },
    toy:[{
        type: Schema.Types.ObjectId,
      ref: "Toy"
    }]
})

module.exports = Baby = mongoose.model('Baby',BabySchema)