const express = require('express');
const indexRouter = require('./routes/index')

const app = express();


//add body parser
app.use(indexRouter);

//set template engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`The server has started on port ${PORT}`);
});
