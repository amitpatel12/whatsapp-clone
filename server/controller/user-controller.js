import userModel from '../model/User.js'
export const addUser = async (req, res) => {
    try {
        let exist = await userModel.findOne({sub: req.body.sub})
        if(exist){
            return res.status(200).json({msg: 'User already exists'})
        }

        const newUser = new userModel(req.body);
        await newUser.save()
        return res.status(200).json(newUser);
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}


export const getUser = async (req, res) => {
    try {
        const user = await userModel.find({});

        return res.status(200).json(user)
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}