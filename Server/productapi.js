var mongoClient = require("mongodb").MongoClient;
var express = require('express');
var cors = require("cors");
var connectionString = "mongodb://127.0.0.1:27017";

var app = express();

app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.get("/products", (req,res)=>{
    mongoClient.connect(connectionString, (err,clientObject)=>{
        if(!err){
            var database = clientObject.db('Shopdb');
            database.collection('tblproducts').find({}).toArray((err,documents)=>{
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
} );

app.get('/details/:Id',(req,res)=>{
    var Id = parseInt(req.params.Id);
    mongoClient.connect(connectionString,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db('Shopdb');
            database.collection('tblproducts').find({ProductId:Id}).toArray((err,documents)=>{
                if(!err){
                    res.send(documents)
                }
            })
        }
    })
})

app.post("/addproducts",(req,res)=>{
    var product = {
        "ProductId": parseInt(req.body.ProductId),
        "Name"     :req.body.Name,
        "Price"    : parseFloat(req.body.Price),
        "Stock"    :(req.body.Stock == "true")?true:false
    };
    mongoClient.connect(connectionString, (err,clientObject)=>{
        var database = clientObject.db("Shopdb")
        database.collection('tblproducts').insertOne(product, (err,result)=>{
            if(!err){
                console.log('Record Inserted..');
            }
        })
    })
});

app.delete('/delete/:Id',(req,res)=>{
    var Id = parseInt(req.params.Id);
    mongoClient.connect(connectionString,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db('Shopdb');
        database.collection('tblproducts').deleteOne({ProductId:Id},(err,result)=>{
            if(!err){
                console.log('Record deleted..');
                res.redirect('/products')
            }
        })
        }
    })
});

app.put('/edit/:Id',(req,res)=>{
    var Id = parseInt(req.params.Id);
    mongoClient.connect(connectionString,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db('Shopdb');
            var findQuery = {ProductId:Id};
            var product = {
                "Name"     :req.body.Name,
                "Price"    : parseFloat(req.body.Price),
                "Stock"    :(req.body.Stock == "true")?true:false
            };
            var updateQuery = {$set : product}
            database.collection('tblproducts').updateOne(findQuery,updateQuery,(err,result)=>{
                if(!err){
                    console.log('Record updated')
                }
            })
        }
    })
})

app.listen(4000);
console.log('server started:http://localhost:4000')