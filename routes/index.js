var express = require('express');
var router = express.Router();
var shopRouter = require('../controllers/shop');
var adminRouter = require('../controllers/admin');
var multer = require('multer');
var upload = multer({ dest : './public/uploads' }).fields([{ name : 'img',
                                                               maxCount : 1  }])
var postProduct = require('../models/postProduct');

// router GET
router.get('/', shopRouter.index);

router.get('/about', shopRouter.about);

router.get('/shop', shopRouter.shop);

router.get('/contact', shopRouter.contact);

router.get('/detailProduct', shopRouter.detailProduct);

router.get('/login', adminRouter.login);

router.get('/add/postProduct', adminRouter.postProduct);

// router.get('/adminsite32157623', adminRouter.adminSite);  //bảo mật lại sau khi hoàn thành trang web


// router Post
router.post('/login', adminRouter.authenLogin);

// router.post('/postProduct', adminRouter.postProductUpload);

router.post('/postProduct', upload, function (req, res) {

    console.log(req.body);
    console.log(req.files);

    const {
        name,
        price,
        detail,
        size
    } = req.body

    const image = req.files['img'][0].path.split('\\').slice(1).join('\\')

    const newPostProduct = {
        name : name,
        price : price,
        detail : detail,
        size : size,
        image : image
    }

    const newPost = new postProduct(newPostProduct)
    newPost.save()

    res.redirect('/add/postProduct')
})

module.exports = router;