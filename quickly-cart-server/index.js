require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;


// ------------------------------------------------------------------------------------------------------------------
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
const cookieOption = {
  httpOnly: true,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  secure: process.env.NODE_ENV === "production" ? true : false,
}
const verifyToken = async(req, res, next) =>{
  const token = req.cookies.token;
  if(!token){
    return res.status(401).send({message: "unauthorized"});
  }
  jwt.verify(token, secret, function(err, decode){
    if(err){
      return res.status(403).send({message: "forbidden"});
    }
    req.user = decode;
    next();
  })
}
// ------------------------------------------------------------------------------------------------------------------

const uri = `mongodb+srv://${process.env.BD_USER_ID}:${process.env.DB_USER_PASSWORD}@cluster0.nuqw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productCollection = client.db("quicklyCartDB").collection("products");
    const userCollection = client.db("quicklyCartDB").collection("users");
    const cartCollection = client.db("quicklyCartDB").collection("carts");
    const adminCollection = client.db("quicklyCartDB").collection("admin");

    // jwt related api---------------------------------------------------------------------------------
    app.post('/jwt', async(req, res) =>{
      const userEmail = req.body;
      // console.log(userEmail);
      const token = jwt.sign(
        userEmail, secret, {expiresIn: '10h'}
      );
      res.cookie(
        'token', token, cookieOption
      ).send({success: true});
    })
    app.post('/clearCookie', async(req, res) =>{
      res.clearCookie("token", cookieOption).send({success: true});
    })


    // admin related api operation---------------------------------------------------------------------
    app.post('/add-product', async(req, res) =>{
      const newProductData = req.body;
      const result = await productCollection.insertOne(newProductData);
      res.send(result);
    })
    app.delete('/delete-product/:id', async(req, res) =>{
      const productId = req.params.id;
      const query = {_id: new ObjectId(productId)};
      const result = await productCollection.deleteOne(query);
      res.send(result);
    })

    // cart related api operation----------------------------------------------------------------------
    app.delete('/cartProduct/:id', async(req, res) =>{
      const productId = req.params.id;
      const deleteProduct = await cartCollection.deleteOne({_id: new ObjectId(productId)});
      res.send(deleteProduct);
    })
    app.get('/cartProducts/:email', async(req, res) =>{
      const email = req.params.email;
      const result = await cartCollection.find({userEmail: email}).toArray();
      res.send(result);
    })
    app.post('/cart', async(req, res) =>{
      const cartProduct = req.body;
      const exitsProduct = await cartCollection.findOne({productId: cartProduct.productId});
      if(!exitsProduct){
        const result = await cartCollection.insertOne(cartProduct);
        res.send(result);
      }else{
        res.send({message: "You already have this product on this cart"});
      }
    })

    // products related api operation----------------------------------------------------------------------
    app.get('/brandProducts/:brand', async(req, res) =>{
      const brand = req.params.brand;
      const result = await productCollection.find({brand: brand}).toArray();
      res.send(result);
    })
    app.get('/brandName', async(req, res) =>{
      const result = await productCollection.aggregate([
        {
          $group: {_id: "$brand"}
        },
        {
          $project: {_id: 0, brand: "$_id"}
        }
      ]).toArray();
      res.send(result); 
    })
    app.get('/search', async(req, res) =>{
      const searchText = req.query.query;
      const query = {
        $or: [
          {name: {$regex: searchText, $options: 'i'}},
          {brand: {$regex: searchText, $options: 'i'}},
          {category: {$regex: searchText, $options: 'i'}},
          {subCategory: {$regex: searchText, $options: 'i'}},
          {title: {$regex: searchText, $options: 'i'}},
        ]
      }
      const result = await productCollection.find(query).toArray();
      res.send(result);
    })
    app.get('/product/:id', async(req, res) =>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id)};
      const product = await productCollection.findOne(query);
      res.send(product);
    })
    app.get('/subcategoryProducts/:subCategory', async(req, res) =>{
      const subCategory = req.params.subCategory;
      const query = {subcategory: subCategory};
      const products = await productCollection.find(query).toArray();
      res.send(products);
    })
    app.get('/categoryProducts/:category', async(req, res) =>{
      const category = req.params.category;
      const query = {category: category};
      const products = await productCollection.find(query).toArray();
      res.send(products);
    })
    app.get('/allProducts', async(req, res) =>{
        const products = await productCollection.find().toArray();
        res.send(products);
    })
    // user related api operation----------------------------------------------------------------------------------
    app.post('/createUser', async(req, res) =>{
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    })
    app.post('/admin', async(req, res) =>{
      const userName = req.body.userName;
      const password = req.body.password;
      const admin = await adminCollection.findOne({userName: userName});
      if(!admin){
        res.send({message: "admin not found"});
      } else{
        if(admin.password == password){
          res.send(admin);
        }else{
          res.send({message: "enter the valid password"});
        }
      }
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', async(req, res) =>{
    res.send("Quickly cart server is running");
})
app.listen(port, () =>{
    console.log(`Quickly cart server is running on Port ${port}`)
})