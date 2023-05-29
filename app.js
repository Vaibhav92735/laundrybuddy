// const mongoose = require('mongoose');
// const express = require('express');
// const path = require("path");
// const app = express();
// const bodyParser = require('body-parser');
// const port = 80;

// app.use('/static',express.static('static'));
// app.use(express.urlencoded());
// app.use(bodyParser.json());

// app.set('view engine', 'html')
// app.set('static',path.join(__dirname,'static'))

// app.get('/',(req,res)=>{
//     const params = { }
//     res.status(200).render('index.html',params);
// })

// app.get('/login',(req,res)=>{
//     const params = { }
//     res.status(200).render('login.html',params);
// })

// app.get('/About',(req,res)=>{
//     const params = { }
//     res.status(200).render('about.html',params);
// })

// app.get('/Register',(req,res)=>{
//     const params = { }
//     res.status(200).render('Register.html',params);
// })

// app.get('/Possesions',(req,res)=>{
//     const params = { }
//     res.status(200).render('Possessions.html',params);
// })

// app.get('/qr',(req,res)=>{
//     const params = { }
//     res.status(200).render('qr.html',params);
// })

// app.get('/missing',(req,res)=>{
//     const params = { }
//     res.status(200).render('missing.html',params);
// })

// app.listen(port, ()=>{
//     console.log(`The application has been successfullystarted on port ${port}`);
// });

const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const VIEWS = path.join(__dirname, 'static');
const port = 80;

mongoose.connect('mongodb://127.0.0.1/register',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'))
db.once('open',()=>{
    console.log("We are connected")
})

const laundrySchema = new mongoose.Schema({
    Mobile_Number : String,
    Laundry_Number: String,
    Username : String,
    Password: String
});

const register = mongoose.model('register', laundrySchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.use(express.static(__dirname + '/index'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views',path.join(__dirname,'static'));

app.get('/', (req,res)=>{
    const params = { }
    res.sendFile('index.html', { root : VIEWS });
    //res.status(200).render('Register.html',params);
})

// app.get('/Register', (req,res)=>{
//     const params = { }
//     res.sendFile('Register.html', { root : VIEWS });
//     //res.status(200).render('Register.html',params);
// })

// app.get('/login', (req,res)=>{
//     const params = { }
//     res.sendFile('login.html', { root : VIEWS });
//     //res.status(200).render('Register.html',params);
// })

// app.get('/', (req,res)=>{
//     const params = { }
//     res.sendFile('Register.html', { root : VIEWS });
//     //res.status(200).render('Register.html',params);
// })

app.post('/land', (req,res)=>{
    const params = { }
    //console.log('Yes');
    //res.sendFile('land.html', { root : VIEWS });
    const Ln='o121';
    var name = req.body.Username;
    var pass = req.body.Password;
    register.find({
        Username: name,
        Password: pass
    }).then((result) =>{
        const [data] = result;
        const n=data.Laundry_Number;
        //res.render('About.html',{"names":data.Username , "mobs":data.Mobile_Number , "laund":data.Laundry_Number});
        res.render('land.html',{data});
    })
    .catch((err) => {
        console.error(err);
    });
    //res.status(200).render('Register.html',params);
})

app.post('/Register', (req,res)=>{
    //res.sendFile('Register.html', { root : VIEWS });
    var Mydata = new register(req.body);
    Mydata.save()
        .then(() => {
            console.log('Laundry details saved successfully!');
            res.sendFile('loginpage.html', { root : VIEWS });
    })
    .catch((err) => {
        console.error(err);
    });
})

app.post('/login', (req,res)=>{
    //res.sendFile('Register.html', { root : VIEWS });
    var name = req.body.Username;
    var pass = req.body.Password;
    register.find({
        Username: name,
        Password: pass
    }).then((result) =>{
        const [data] = result;
        const n=data.Laundry_Number;
        //res.render('About.html',{"names":data.Username , "mobs":data.Mobile_Number , "laund":data.Laundry_Number});
        res.render('AboutMe.html',{data});
    })
    .catch((err) => {
        console.error(err);
    });
})

app.post('/lost', (req,res)=>{
    //res.sendFile('Register.html', { root : VIEWS });
    var Ln = req.body.Laundry_Number;
    register.find({
        Laundry_Number:Ln
    }).then((result) =>{
        const [data] = result;
        //const n=data.Username;
        //res.render('About.html',{"names":data.Username , "mobs":data.Mobile_Number , "laund":data.Laundry_Number});
        res.render('lostkey.html',{data});
    })
    .catch((err) => {
        console.error(err);
    });
})

app.listen(port,()=>{
    console.log('The application has been started on the port');
})