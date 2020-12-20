const express = require('express');
const morgan = require('morgan');
const path= require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');


const route = require('./routes');
//static files
app.use(express.static(path.join(__dirname,'public')))
//install morgan
app.use(morgan('combined'))
//change .handlebars to .hbs
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
//middle wave
app.set(express.urlencoded());
app.set(express.json());
//static files
app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'resources/views')); 

// route init
route(app);
//send require to sever
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
