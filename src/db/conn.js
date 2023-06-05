var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://hostnodeapp.onrender.com/student_API';
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(()=>{
    console.log('Db connected ......');
}).catch((err)=>{
    console.log(err);
});
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
