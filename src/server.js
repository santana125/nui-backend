const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://nuiadm:KAPMpgyBYJhazyj3@nui-lcjgk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(5001);

