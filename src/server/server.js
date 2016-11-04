const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static('/public', path.join(__dirname + '../client/public')));
app.use(express.static(path.join(__dirname, '/../client/public')));


app.listen(3000);