//requires
const express = require('express');
app = express();
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home-router');
const entriesRouter = require('./routes/entry-router');
const projectsRouter = require('./routes/project-router');
const projectTotalRouter = require('./routes/project-total-router');
const reportsRouter = require('./routes/report-router');
//globals
const PORT = process.env.PORT || 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/', homeRouter);
app.use('/entries', entriesRouter);
app.use('/projects', projectsRouter);
app.use('/projectTotals', projectTotalRouter)
// app.use('/reports', reportsRouter);

//spins
app.listen(PORT, () => {
    console.log('SERVER UP AND RUNNING ON PORT: ', PORT);    
});