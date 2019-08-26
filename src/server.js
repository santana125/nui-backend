const express = require('express');
require('dotenv').config({path: './src/config/.env'});
const {DB_USER,
	   DB_PASS,
       DB_HOST} = process.env;
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/test?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(5001);

