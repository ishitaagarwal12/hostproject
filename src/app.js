const express = require('express');
require('./db/conn')
const port = process.env.PORT || 5200;
const app = express();
const studentRouter = require('./router/student')

app.use(express.json())
app.use(studentRouter)

app.use((req,res,next) => {
    console.log("in the middleware");
    res.send('<h1>add product</h1>');
});

app.listen(port, () => {
    console.log('Connection successfully..........');
})