const postproduct = require('../models/postProduct')
const postcategory = require('../models/postCategory')

module.exports = {
    index : async (req, res) => {
        const postProduct = await postproduct.find().lean().sort()
        const postCategory = await postcategory.find().lean().sort()
        res.render('homepage/index', { postProduct : postProduct, postCategory : postCategory })
    },

    about : function (req, res) {
        res.render('homepage/about')
    },

    shop : async (req, res) => {
        const postProduct = await postproduct.find().lean().sort()
        res.render('homepage/shop', { postProduct : postProduct })
    },

    contact : function (req, res) {
        res.render('homepage/contact')
    },

    detailProduct : async (req,res) => {
        const postProduct = await postproduct.findOne({ id : req.params.id }).lean().exec()
        res.render('homepage/detailProduct', { postProduct : postProduct })
    }
}