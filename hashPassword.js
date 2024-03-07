const bcrypt=require('bcrypt');
const {User}=require('./models');
const hasExistingPasswords=async()=>{
    try{
    const users=await User.findAll();

    // now got the 10 users and will now itrate and give the pass to all users

    for (const user of users){
        console.log(`${user.password}`);
        let salt=10;
        const hashPassword= await bcrypt.hash("Puneet@12",salt);
        console.log(hashPassword);
        user.password=hashPassword;
        await user.save();
        
    }
    console.log("password has been saved for existing users")
} catch (error){
    console.error("error hashing password ",error);
}
};

hasExistingPasswords();