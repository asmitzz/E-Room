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
    database:'roomdb'
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
app.use( bodyParser.json({ limit:'1024mb' }) );
app.use( bodyParser.urlencoded({ limit:'1024mb', extended:true ,parameterLimit:50000000000}) );
app.get('/',(req,res) => {
    res.send("server is running")
})

app.get('/api/get',(req,res) => {
    const Select = "SELECT * FROM room_details";
    con.query(Select,(err,result) => {
        res.send(result)
    }) 
})

app.use('/api/insert',(req,res) => {
    const name = req.body.name;
    const rent = req.body.rent;
    const lookingfor = req.body.lookingfor;
    const address = req.body.address;
    const area = req.body.area;
    const pincode = req.body.pincode;
    const phone = req.body.phone;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3;
    const image4 = req.body.image4;

    const Insert = "INSERT INTO room_details ( Id,name,rent,lookingfor,address,area,pincode,phone,image1,image2,image3,image4 ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

    con.query(Insert,["",name,rent,lookingfor,address,area,pincode,phone,image1,image2,image3,image4]);
})

app.listen(port,() => console.log("server is running on :" ,port))