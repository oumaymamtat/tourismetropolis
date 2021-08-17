const express = require("express")
const mongoose=  require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

mongoose.set('useFindAndModify', false);

dotenv.config()

//server set up
const app = express()
const PORT =process.env.POT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running at port: ${PORT}`)
})

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:8000"],
    credentials :true
}))

//db connection


mongoose.connect(process.env.CONNECT, ({useNewUrlParser:true, useUnifiedTopology:true}), (err) => {
    if (err) return console.error(err)
    console.log("Connected")
})





//routes set up

app.use("/", require("./routers/userRouter"))
















//routes??
// app.get("/", (req,res)=>{
//     Users.find().then(users=>res.json(users))
// })

// app.post("/", (req,res) => {
//     const newUser = new Users({
//         nom:req.body.nom
//     })
//     newUser.save().then(user=> res.json(user))
// })

// app.post("/signup", (req,res) => {
//     const newUser = new Users({
//         nom:req.body.nom,
//         type:req.body.type,
//         email:req.body.email,
//         password:req.body.password
//     })
//     newUser.save().then(user=> res.json(user))
// })

