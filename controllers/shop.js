module.exports = {
    index : function (req, res) {
        res.render('homepage/index')
    },

    about : function (req, res) {
        res.render('homepage/about')
    },

    shop : function (req, res) {
        res.render('homepage/shop')
    },

    contact : function (req, res) {
        res.render('homepage/contact')
    },

    detailProduct : function (req,res) {
        res.render('homepage/detailProduct')
    }
}