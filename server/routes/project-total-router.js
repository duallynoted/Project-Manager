const express = require('express');
let router = express.Router();
const pool = require('../module/pool');

router.get('/', (req, res) => {     
    pool.query(`SELECT * FROM "entry"
    WHERE "entry"."project_id" = $1;`, [req.query.project_id])    
        .then((results) => {
            // console.log(results.fields[4]);
            // res.send(results.fields);
            console.log(results);
            
            res.send(results.rows);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);                        
        });//end GET query
});//end GET call server side

module.exports = router;