var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/student_API';
const uri = "mongodb+srv://user-17:abcabcabc@cluster0.ojwexn4.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true }).then(()=>{
    console.log('Db connected ......');
}).catch((err)=>{
    console.log(err);
});
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
