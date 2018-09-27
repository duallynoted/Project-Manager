const express = require('express');
let router = express.Router();
const pool = require('../module/pool');


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "entry"`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);                        
        });//end GET query
});//end GET call server side

router.post('/', (req, res) => [
    pool.query(`INSERT INTO "entry" ("name","project_id", "date", "start_time","end_time")
    VALUES ($1, $2, $3, $4, $5);`, [req.body.name, req.body.project_id, req.body.date, req.body.start_time, req.body.end_time]) 
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error POSTING entry from PostgreSQL', error);
            res.sendStatus(500);
        })//end POST query
]);//end POST call server side

router.delete('/', (req, res) => [
    pool.query(`DELETE FROM "entry"
    WHERE "id" = ($1);`, [req.query.id])
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error DELETING entry from PostgreSQL', error);
            res.sendStatus(500);
        })//end DELETE query
]);//end DELETE call server side


module.exports = router;
