const express = require('express');
const path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const tables = [
    {
        "customerName": "TABLEZZZ",
        "phoneNumber": "9737679131",
        "customerEmail": "delingerr@gmail.com",
        "customerID": "1"
        }
];

const waitList = [
    {
        "customerName": "WAITLIST ju herrd",
        "phoneNumber": "9737679131",
        "customerEmail": "delingerr@gmail.com",
        "customerID": "1"
        }
];

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"))
});

app.get('/tables',(req,res)=>{
    res.sendFile(path.join(__dirname,".html"))
    
});

app.get('/reserve',(req,res)=>{
    res.sendFile(path.join(__dirname,"makeres.html"))
    
});

app.get('/vtables',(req,res)=>{
    for(i in tables){
        return res.json(tables[i])
    }
});

app.get('/vwaitlist',(req,res)=>{
    for(i in waitlist){
        return res.json(waitlist[i]);
    }
});

app.post("/api/makeres", function(req, res) {
    var newReservation = req.body;
    newReservation.uniqueID = newReservation.uniqueID.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    if (tables.length === 5) {
        newReservation.push(waitList);
    } else {
        newReservation.push(tables);
    }
    res.json(newReservation);
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  