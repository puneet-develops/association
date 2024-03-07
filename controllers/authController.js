const db=require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        console.log(username);
        //check if the email exists in the db
        const userExists=await db.User.findeOne({

            where:{email}
        })
        console.log("here");
        if(userExists){
            return res.status(400).send('Email is already is associated with someone ')
        }
        console.log("here --1");

        await db.Users.create({
            username,email,password:await bcrypt.hash(password,10)
        });
        console.log("here --2");

        return res.status(200).send('Registration successful');
    }catch(err){
        return res.status(500).send('Error in registering user');
    }
};

const signInUser=async(req,res)=>{
    try{
        const {email ,password}=req.body;
        const user=await db.Users.findeOne({
            where: {email}
        });

        if(!user){
            return res.status(404).json('Email not found');
        }

        //verify password
        const passwordvalid=await bcrypt.compare(password,user.password);
        if(!passwordvalid){
            return res.status(404).json('Incorrect email and password combination');
        }
        // ab bhejenge authentiaction token
        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_REFRESH_EXPIRATION,
        });
        res.status(200).send({
            id: user.user_id,
            name: user.username,
            email: user.email,
            accessToken: token,
        });

    }catch(err){
        return res.status(500).send('Sign in error');
    }
}

module.exports={
    registerUser,
    signInUser
}
