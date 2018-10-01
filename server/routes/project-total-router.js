const express = require('express');
let router = express.Router();
const pool = require('../module/pool');

router.get('/', (req, res) => { 
    console.log(req);
    
    pool.query(`SELECT * FROM "entry"
    WHERE "entry"."project_id" = $1;`, [req.body.project_id])    
        .then((results) => {
            console.log(results.fields[4]);
            res.send(results.fields);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);                        
        });//end GET query
});//end GET call server side

module.exports = router;