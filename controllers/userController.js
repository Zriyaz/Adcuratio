const User  = require('../models/user')
const {generateToken} = require('../utils/generateToken')


exports.registerUser = async(req, res) =>{
    
    const {name, email, password} = req.body
    try {
        const userExist = await User.findOne({email})
        if(userExist){
           return res.status(400).send({error : 'User already exist'})
        }
        const user = await User.create({
            name,
            email,
            password
        })

        if(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token : generateToken(user._id)
            })
        }else{
            return res.status(400).send({error : 'Something went wrong Please try again!'})
        } 

    } catch (error) {
         console.log(error.message);
         res.status(500).send('Server error');
    }
}




exports.userLogin = async(req, res)=>{
    const {email, password} = req.body

    try {
        const user = await User.findOne({email})
        if(user && (await user.matchPassword(password))){
         
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token : generateToken(user._id)
            })
        }else{
           return res.status(404).send({error: "Invalid email and password!"})
        }    
    } catch (error) {
        res.json({error: "Something weng wrong please try again!"})
    }
}

