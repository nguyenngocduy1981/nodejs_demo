
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routeList = routes();

for(let apiPath in routeList){
  app.use(apiPath, routeList[apiPath]);
}


var port = process.env.PORT || 8080;
app.listen(port);
console.log('Server works on port ' + port);
