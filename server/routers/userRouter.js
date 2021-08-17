const router = require("express").Router()
const User = require("../models/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

mongoose.set('useFindAndModify', false);

router.post("/signup", async (req, res) => {
    try {
        const {nom, email, password, password2, type, adresse, tel, activite, vente, fabrication, infos} = req.body;

        //validation
        if (!email || !password || !nom || !password2 || !type || !adresse ||  !tel ){
            return res.status(400).json({errorMessage:"Please enter all required fields."});
        }

        if (password == "password" || password.lenght < 6 ){
            return res.status(400).json({errorMessage:"Please enter a stronger password."});
        }
        if (password !== password2 ){
            return res.status(400).json({errorMessage:"Password did not matc."});
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({errorMessage:"An account with this email already exists."});
        }

        //hash

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)



        //save new user

        const newUser = new User({
            nom, passwordHash, email, type, adresse,tel, activite, fabrication, vente, infos
        })

        const savedUser = await newUser.save()

        //sign the user
         const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET)


        //send the token in a http-only cookie
        res.cookie("token", token, {
            httpOnly:true
        }).send()

    }catch(err){
        console.error(err);
        res.status(500).send();
    }
})

//log in

router.post("/signin", async (req, res) => {
    try{
        const {email, password} = req.body;
        //validation
        if (!email || !password){
            return res.status(400).json({errorMessage:"Please enter all required fields."});
        }

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(401).json({errorMessage:"Wrong email or password"});
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash)
        if (!passwordCorrect){
            return res.status(401).json({errorMessage: "Wrong email or password"})
        }

        //sign the user
        const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET)


        //send the token in a http-only cookie
        res.cookie("token", token, {
            httpOnly:true
        }).send()


    }catch(err){
        console.error(err);
        res.status(500).send();
    }
})


//log out

router.get("/logout", (req,res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
})


//signup2

router.patch("/signup2/:id", async (req, res) => {
    const update = await User.findByIdAndUpdate(req.params.id, req.body);

})

router.patch("/signup3/:id", async (req, res) => {
    const update = await User.findByIdAndUpdate(req.params.id, req.body);

})

module.exports= router