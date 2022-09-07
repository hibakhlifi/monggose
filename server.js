const express = require('express');

const connectDB = require('./connectDB');

const persons = require('./model/clientModel');

const app = express();

connectDB();

const port = process.env.PORT || 5000;

// Create and Save a Record of a Model: 
 //   const Person = new persons({name:'hiba',age:23,favouriteFood:["Pizza"]})
  //  Person.save(function(err){
       // if(err) return console.log(err);
 //   }) 


//persons.create([{
    //         name:"selim",
    //         email:"selim@gmail.com",
    //         age:"20",
    //         phone:23456789,
    //        favouriteFoods:"pasta"
    //     },{
    //         name:"delia",
    //         email:"delia@gmail.com",
    //         phone:23456789,
    //         age:"21",
    //        favouriteFoods:"salade"
    //     },{
    //         name:"farah",
    //         email:"farah@gmail.com",
    //         age:"23",
    //         phone:23456789,
    //        favouriteFoods:"fish and chips"
    //     }],(err,data)=>{
    //         try {
    //             console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     })
    

    // Use model.find() to Search Your Database
// contact.find({name:'delia'},(err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })

    
    

    // Use model.findOne() to Return a Single Matching Document from Your Database:
// contact.findOne({favouriteFoods:"pasta"},(err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })

// Use model.findById() to Search Your Database By _id
// const func= async ()=>{
//         const data= await contact.findById("618826bad4000c2a4f87ca54").exec()
//         console.log(data)
//     }
//     func()

// Perform Classic Updates by Running Find, Edit, then Save
// contact.findById("618826bad4000c2a4f87ca54",(err,data)=>{
//     try {
//          data.favouriteFoods="hamburger";
//          data.save();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })

// Perform New Updates on a Document Using model.findOneAndUpdate()
// const func= async ()=>{
//             contact.findOneAndUpdate({age:20},{age: 30},(err)=>{
//                 if (err) console.log("err")
//                 else
//                 cosole.log("done")
//             })
//         }
// func()

// Delete One Document Using model.findByIdAndRemove
//delete
// contact.findByIdAndRemove('6188288a61233d9e9e2644d2', (err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// } )

// MongoDB and Mongoose - Delete Many Documents with model.remove()
// const func= async ()=>{
//             contact.Remove({name:"farah"},(err)=>{
//                 if (err) console.log("err")
//                 else
//                 cosole.log("done")
//             })
//         }
// func()

// Chain Search Query Helpers to Narrow Search Results
// const func= async ()=>{
//             contact.find({age:"23"}).sort(name).limit(20).select().exec((err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// } )
//         }

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server running on port ${port}`);
})