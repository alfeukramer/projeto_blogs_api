const express = require('express');
const errors = require('./middlewares/genericError');
const loginRouter = require('./routes/login.routes');
// const routesAuth = require('./routes/auth.routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use(errors);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
