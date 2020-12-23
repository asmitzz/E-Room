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
    const img = req.body.img;
    const location = req.body.location;

    const Insert = "INSERT INTO posts ( rent,name,LookingFor,img,location ) VALUES (?,?,?,?,?)";

    con.query(Insert,[rent,name,looking,img,location])
})

app.listen(port,() => console.log("server is running on :" ,port))