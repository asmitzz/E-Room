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
app.use( express.json() );
app.use( bodyParser.urlencoded({ extended:true }) );
app.get('/',(req,res) => {
    res.send("server is running")
})

app.get('/api/get',(req,res) => {
    const Select = "SELECT * FROM posts";
    con.query(Select,(err,result) => {
        res.send(result)
    }) 
})

app.listen(port,() => console.log("server is running on :" ,port))