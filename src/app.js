const express = require('express');
require('./db/conn')
const port = process.env.PORT || 5000;
const app = express();
const studentRouter = require('./router/student')

app.use(express.json())
app.use(studentRouter)

app.listen(port, () => {
    console.log('Connection successfully..........');
})