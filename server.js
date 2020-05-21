const express = require('express');
const path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const tables = [
 
];

const waitList = [

];

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,".html"))
});

app.get('/tables',(req,res)=>{
    res.sendFile(path.join(__dirname,".html"))
    
});

app.get('/reserve',(req,res)=>{
    res.sendFile(path.join(__dirname,".html"))
    
});

app.get('/tables',(req,res)=>{
    for(i in tables){
        return res.json(tables[i])
    }
});

app.get('/waitlist',(req,res)=>{
    for(i in waitlist){
        return res.json(waitlist[i]);
    }
});

app.post('/add',(req,res) =>{
    const newtables = req.body;
    tables.push(newtables);
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  