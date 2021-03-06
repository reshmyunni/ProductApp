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

app.get('/product/:id', function (req, res) {
    console.log("test3");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.params);
    const id = req.params.id;
    console.log(ProductData);
        ProductData.findOne({_id: id },function(err,product){

            if(err){
                console.log(err);
            }else{
                console.log(product);
                res.send(product);
            }
        });
        // .then(function (product) {
        //     console.log(product);
        //     res.send(product);
        // });
});
app.post('/insert', function (req, res) {
    console.log("insert");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId: req.body.product.productId,
        productName: req.body.product.productName,
        productCode: req.body.product.productCode,
        releaseDate: req.body.product.releaseDate,
        description: req.body.product.description,
        price: req.body.product.price,
        starRating: req.body.product.starRating,
        imageUrl: req.body.product.imageUrl
    };
    console.log(product);
    var product = new ProductData(product);
    product.save();
});

app.post('/edit/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var id = req.params.id;
    

    query = { _id: id };
    var newvalues = { $set: { productId: req.body.product.productId, productName: req.body.product.productName, productCode: req.body.product.productCode, releaseDate: req.body.product.releaseDate, description:req.body.product.description,price:req.body.product.price,starRating:req.body.product.starRating,imageUrl:req.body.product.imageUrl } };
    ProductData.updateOne(query, newvalues, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.redirect("/");
    });
});




app.post('/insertnewuser', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log("test4");
    console.log(req.body);
    var user = {
        Name: req.body.user.Name,
        Address: req.body.user.Address,
        Email: req.body.user.Email,
        Phone: req.body.user.Phone,
        Username: req.body.user.Username,
        Password: req.body.user.Password,
        
    };
    var user = new Userdata(user);
    user.save();
});

app.post('/login', function (req, res) {

    const username = req.body.user.username;
    console.log("username :"+username);
    const password = req.body.user.password;
    console.log("password :"+password);

    Signupdata.findOne({ username: username})
        .then(function (user) {
            if(user){
            if(password === user.password){
                res.redirect("/");
            }else{
                res.redirect("/signin");
            }
            // console.log("User :"+user.password)
            
                
            }

        });


});


app.post('/delete/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log("app delete");
    var id = req.params.id;
    console.log("id :" + id);
    ProductData.deleteOne({ _id: id })
        .then(function (result) {
            console.log(result);

            console.log("deleted");
            res.redirect("/");


        });
});

app.listen(3000, function () {
    console.log('listening to port 3000');
});