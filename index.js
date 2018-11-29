const express = require('express');
const app = express();
const port = 3005;
var bodyParser = require('body-parser');
var arreglo  = [
    {
        nombre:"carlos",
        password:"1234"
    },
    {
        nombre:"kevin",
        password:"1234"
    },
    {
        nombre:"katia",
        password:"1234"
    }
]
//va a hacer estatica la manera en la q va a traer el renderizado de u archivo html
app.use(express.static(__dirname + 'public'));
console.log(__dirname);

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vdn.api+json'}));


app.post('/ingresar',function(req, res){
    console.log(req.body)
    let {username, password} = req.body;
    if (arreglo.find((x)=>x.nombre==username && x.password==password)){
        res.send("ALL+OK")
    }
    else{
        res.send("ALL+FALL")
    }
})
app.get('/obtener',function(req, res){
    res.send({
        msg:"ALL_OK",
        data: "cualquiercosa"
    })
})
app.get('*',function(req, res){
    res.sendfile(__dirname + '/public/')
})

app.listen(port, function(){
    console.log('servidor funcionando correcto en el puerto:', port);
})