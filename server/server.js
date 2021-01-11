const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { query } = require('express');
const port = 8000;


const con = mysql.createConnection({
    // user:'admin',
    // password:'asmit2805',
    // host:'eroom.ctav5wcvj17n.ap-south-1.rds.amazonaws.com',
    // database:'eroom',
    // port:3399
    user:'root',
    host:'localhost',
    password:'',
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

app.get('/api/get/posts',(req,res) => {
    const SelectAllPosts = "SELECT * FROM room_details";
    con.query(SelectAllPosts,(err,result) => {
        res.send(result)
    }) 
})

app.use('/api/delete/post',(req,res) => {
    const post = req.body.Id;
    const deletePost = `DELETE FROM room_details WHERE room_details.Id = ${post}`;
    con.query(deletePost);
})

app.use('/api/insert/posts',(req,res) => {
    const name = req.body.name;
    const rent = req.body.rent;
    const lookingfor = req.body.lookingfor;
    const description = req.body.describe;
    const address = req.body.address;
    const area = req.body.area;
    const pincode = req.body.pincode;
    const phone = req.body.phone;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3;
    const image4 = req.body.image4;
    const uid = req.body.uid;

    const InsertPost = "INSERT INTO room_details ( Id,name,rent,lookingfor,description,address,area,pincode,phone,image1,image2,image3,image4,uid ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    con.query(InsertPost,["",name,rent,lookingfor,description,address,area,pincode,phone,image1,image2,image3,image4,uid]);
})

app.use('/api/insert/feedbacks',(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const InsertFeedbacks = 'INSERT INTO contact_us ( name,email,subject,message ) VALUES (?,?,?,?)';
    con.query(InsertFeedbacks,[name,email,subject,message]);
})

app.listen(port,() => console.log(`server is running on : ` ,port))