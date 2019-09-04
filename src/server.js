const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
mongoose.connect('mongodb+srv://nuiadm:KL1CAemvcW14l3gR@nui-lcjgk.mongodb.net/test?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());
app.use(routes);


//app.listen(5001);

