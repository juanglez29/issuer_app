const express= require('express');
const app= express();
const webhooks= require('/home/juan/issuer_app/backend/controllers/webhooks_controller.js');
const indexrouter= require('/home/juan/issuer_app/backend/routes/index2.js');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());
app.use('/myapi',indexrouter);
app.use('/webhooks',webhooks.whconn);

app.listen(8021, ()=> console.log('escuchando'));