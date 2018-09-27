//requires
const express = require('express');
app = express();
const bodyParser = require('body-parser');

//globals
const PORT = process.env.PORT || 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//home router
//entries router
//projects router
//reports router

//spins
app.listen(PORT, () => {
    console.log('SERVER UP AND RUNNING ON PORT: ', PORT);    
});