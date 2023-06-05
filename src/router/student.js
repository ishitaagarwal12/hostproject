const express = require("express")
const Student = require('../models/student');
const router =new express.Router();

// create a router 


router.get('/newPath',(req,res)=>{
    res.send('test data')
});
// post rest api

// router.post('/student', (req, res) => {
//     const user = new Student(req.body);
//     user.save().then(() => {
//         console.log('Data added successfully....');
//         res.status(201).send(user)
//     }).catch((err) => {  
//         console.log(err);
//         res.status(400).send(err)
//     })
// });

router.post('/student', async (req, res) => {
    const user = new Student(req.body);
    try {
        createUser = await user.save()
        console.log('Data added successfully....');
        res.status(201).send(user)
    } catch(err) {
        console.log(err);
        res.status(400).send(err)
    }
});


// get rest api

router.get('/student', async (req,res)=>{

    try{
        const allData = await Student.find();
        res.status(200).send(allData)
    }catch(err){
   res.status(400).send(err)
    }

})


// get indivisual data 

router.get('/student/:name', async (req,res)=>{
    try{
        const nam = req.params.name;
        console.log(nam);
        const data = await student.find({'name' : nam});
     if(!data){
        res.status(404).send()
     }else{
        res.status(200).send(data)
     }

    }catch(err){
        res.status(500).send(err)
    }
})


// Delete any account
router.delete('/student/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
     console.log(_id);
    const deletedStudent = await student.findByIdAndDelete(_id);
    res.status(200).send(deletedStudent)
       if(!_id){
        res.status(400).send()
       };
    }catch(err){
        res.status(500).send(err)
    }

});

// update any account 
router.patch('/student/:id', async(req,res)=>{
    try {
        const _id = req.params.id;
       const update = await student.findByIdAndUpdate(_id,req.body,{new:true});
       res.status(201).send(update) 


    } catch (err) {
        console.log(err);
        res.status(404).send(err)
    }
})

module.exports = router;