const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { query } = require('express');
const port = 8000;


const con = mysql.createConnection({
    user:'root',
    password:'',
    host:'localhost',
    database:'E-Room'
});

con.connect( err => {
    if(err){
        console.log("error connecting to db")
    }
    else{
        console.log("connection established")
    }
} )

app.use(cors());
app.use( bodyParser.json({ limit:'50mb' }) );
app.use( bodyParser.urlencoded({ limit:'50mb', extended:true ,parameterLimit:50000}) );
app.get('/',(req,res) => {
    res.send("server is running")
})

app.get('/api/get',(req,res) => {
    const Select = "SELECT * FROM posts";
    con.query(Select,(err,result) => {
        res.send(result)
    }) 
})

app.use('/api/insert',(req,res) => {
    const rent = req.body.rent;
    const name = req.body.name;
    const looking = req.body.LookingFor;
    const img1 = req.body.img1;
    const img2 = req.body.img2;
    const img3 = req.body.img3;
    const img4 = req.body.img4;
    const location = req.body.location;
    const phone = req.body.phone;
    const pincode = req.body.pincode;

    const Insert = "INSERT INTO posts ( rent,name,LookingFor,location,phone,img2,img3,img4,img1,pincode ) VALUES (?,?,?,?,?,?,?,?,?,?)";

    con.query(Insert,[rent,name,looking,location,phone,img1,img2,img3,img4,pincode]);
})

app.listen(port,() => console.log("server is running on :" ,port))