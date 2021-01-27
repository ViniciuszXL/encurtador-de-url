const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
app.use(require('cors')());

// Arguments //
const PORT = 8080;
const message = `API rodando na porta ${PORT} e tem o id de processo ${process.pid}`;

// Mongo Connection //
mongoose.connect('mongodb://mongo/encurtador-de-url', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Create server //
const server = http.createServer(app);
server.listen(PORT);
console.log(message);

// Routes //
const RedirectUrl = require('./routes/RedirectUrl');

app.use('/api', RedirectUrl);