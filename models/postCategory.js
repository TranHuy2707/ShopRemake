const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productCategory = new Schema ({
    name : {
        type : String,
        require : true
    },
    name_crate : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('productCategory', productCategory)