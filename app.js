" use strict"
var express = require('express')
var app = express()

app.listen(3000)
console.log('Node.js Express server is running on port 3000..')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    const allowedOrigins = ['https://editor.swagger.io', 'https://hoppscotch.io'];
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    // Request methods you wish to allow eg: GET, POST, OPTIONS, PUT, PATCH, DELETE
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});





app.get('/data/2.5/weather',get_weather)
function get_weather(request, response) {
     response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":282.61,"feels_like":282.61,"temp_min":280.58,"temp_max":285.29,"pressure":1018,"humidity":84},"visibility":10000,"wind":{"speed":0.89,"deg":225,"gust":0.89},"clouds":{"all":0},"dt":1642038331,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642002454,"sunset":1642035291},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}



app.get("/v1/weather", get_weather2)
function get_weather2(request, response) {
     console.log('get_weather2 received req for v1 weather')
     response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":282.61,"feels_like":282.61,"temp_min":280.58,"temp_max":285.29,"pressure":1018,"humidity":84},"visibility":10000,"wind":{"speed":0.89,"deg":225,"gust":0.89},"clouds":{"all":0},"dt":1642038331,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642002454,"sunset":1642035291},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}

app.get("/v1/hello", get_hello)
function get_hello(request, response) {
     response.send('Hi!')
}

app.post('/v1/auth',post_auth)
function post_auth(req,res){
    var username = req.body.username
    var pwd = req.body.password

     console.log(username,pwd)
    res.json({ "Sucess" : "this is your token..."})
    
}