var express = require('express');
var router = express.Router();
var shopRouter = require('../controllers/shop');
var adminRouter = require('../controllers/admin');
var multer = require('multer');
var upload = multer({ dest : './public/uploads' }).fields([{ name : 'img', maxCount : 1  },
                                                           { name : 'img1', maxCount : 1  }])
var postProduct = require('../models/postProduct');
var postCategory = require('../models/postCategory');

// router GET
router.get('/', shopRouter.index);

router.get('/about', shopRouter.about);

router.get('/shop', shopRouter.shop);

router.get('/contact', shopRouter.contact);

router.get('/login', adminRouter.login);

router.get('/add/postProduct', adminRouter.postProduct);

router.get('/add/postCategory', adminRouter.postCategory);

router.get('/shop/:id', shopRouter.detailProduct);

// router Post
router.post('/login', adminRouter.authenLogin);

router.post('/postCategory', upload, function (req, res) {
    const {
        list,
        name_crate
    } = req.body

    const image = req.files['img1'][0].path.split('\\').slice(1).join('\\')

    const newPostCategory = {
        list : list,
        name_crate : name_crate,
        image : image
    }

    const newPost = new postCategory(newPostCategory)
    newPost.save()

    res.redirect('/add/postCategory')
})

router.post('/postProduct', upload, function (req, res) {
    const {
        name,
        price,
        detail,
        size,
        list
    } = req.body

    const image = req.files['img'][0].path.split('\\').slice(1).join('\\')

    const newPostProduct = {
        name : name,
        price : price,
        detail : detail,
        size : size,
        image : image,
        list : list
    }

    const newPost = new postProduct(newPostProduct)
    newPost.save()

    res.redirect('/add/postProduct')
})

module.exports = router;