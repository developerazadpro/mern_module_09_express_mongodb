use("Craftshop")

//db.getCollectionNames()


// --------------------------------projection
// selecting only specific colulmn rather than all columns
// db.employee.find(
//     {},
//     {_id:0}
// )

// --------------------------------comparision operator
// db.employee.find(
//     {
//         salary:{$eq:35000}
//     }
// )

// db.employee.find(
//     {
//         salary: {$ne: 35000}
//     }
// )

// db.employee.find(
//     {
//         salary: {$gt: 35000}
//     }
// )

// db.employee.find(
//     {
//         salary: {$gte: 35000}
//     }
// )

// db.employee.find(
//     {
//         salary: {$lte: 35000}
//     }
// )

// db.employee.find(
//     {
//         salary: {$in: [35000, 40000]}
//     }
// )

// db.employee.find(
//     {
//         salary: {$nin: [35000, 40000]}
//     }
// )


// ----------------------------logical operator
// db.employee.find({
//     $and:[
//         {salary:{$gt:4000}},
//         {name:{$eq: "Rakib"}}
//     ]
        
// })

//  db.employee.find({
//     $or:[
//         {salary:{$eq:4000}},
//         {name:{$eq: "Rakib"}}
//     ]
        
// })



//---------------------------- element query ($exists, $type))
// db.employee.find({
//     salary: {$exists: true}
// })

// db.employee.find({
//     name: {$type: 2}
// })

// db.employee.find({
//     district: {$exists: false}
// })

// evaluation query ($expr, $regex, $mod, $where, $text, $jsonSchema)
// db.monthlyBudget.find(
//     {
//         $expr:
//         {
//             $gt:["$budget", "$spent"]
//         }
//     }
// )

// db.monthlyBudget.find(
//     {
//         budget:
//         {
//             $mod: [200, 0]
//         }
//     }
// )

// db.monthlyBudget.find(
//     {
//         category:
//         {
//             $regex: "drink"
//         }
//     }
// )

// db.monthlyBudget.find(
//     { $where:"this.budget < this.spent"}
// )

// Sort, limit, distinct, count

// db.employee.find().sort({salary:-1})

// db.employee.distinct("name")

// db.employee.find().limit(3)

// db.employee.find().count()


// delete one
// db.employee.deleteOne(
//     {
//         "_id": ObjectId("647b7653eeff41c1022af53b")
//     }
// )

// delete many
// db.employee.deleteMany({
//     $where: "this.salary >= 70000"
// })

// update one
// db.employee.updateOne(
//     {
        
//          _id: ObjectId("64778d1f3d480eaccae46841")
//     },
//     {
//         $set:{
//             salary: "25000"
//         }
//     }       
// )

// update many
// db.employee.updateMany(
//     {
//         city:{$eq: "Rangpur"}
//     },
//     {
//         $set: {
//             designation: "Sr. Software Engineer"
//         }
//     }
// )

// rename column name
// db.monthlyBudget.updateMany(
//     {},
//     {
//         $rename:{
//             spent: "expense"
//         }
//     }
// )


// upsert, update and insert
// db.employee.updateOne(
//     {
//         name: "Azharul"
//     },
//     {
//         $set:
//         {
//             "name": "Azharul",
//             "designation": "Senior Software Engineer",
//             "salary": 70000,
//             "city": "Rangpur"
//         }
//     },
//     {
//         upsert:true
//     }
// )




