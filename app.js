const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
var bodyparser = require('body-parser');
const Userdata = require('./src/model/Userdata');
var app = new express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyparser.json());
app.get('/products', function (req, res) {
    console.log("console.log(req.body) :" + console.log(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find().then(function (products) {
        res.send(products);
    });
});

app.get('/product', function (req, res) {
    console.log("test3");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.params);
    const id = req.params.id;
    ProductData.findOne({ _id: id })
        .then(function (product) {
            console.log(product);
            res.render('edit', {

                product
            });
        });

});
app.post('/insert', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId: req.body.product.productId,
        productName: req.body.product.productName,
        productCode: req.body.product.productCode,
        releaseDate: req.body.product.releaseDate,
        description: req.body.product.decription,
        price: req.body.product.price,
        starRating: req.body.product.starRating,
        imageUrl: req.body.product.imageUrl
    };
    var product = new ProductData(product);
    product.save();
});


app.post('/insertnewuser', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var user = {
        Name: req.body.user.Name,
        Address: req.body.user.Address,
        Email: req.body.user.Phone,
        Phone: req.body.user.Email,
        Username: req.body.user.Username,
        Password: req.body.user.Password,
        
    };
    var user = new Userdata(user);
    user.save();
});
//insertnewuser

app.get('/delete', function (req, res) {
    var id = req.params.id;
    console.log("id :" + id);
    Bookdata.deleteOne({ _id: id })
        .then(function (result) {
            console.log(result);

            console.log("deleted");
            res.redirect("/products");


        });
});

app.listen(3000, function () {
    console.log('listening to port 3000');
});