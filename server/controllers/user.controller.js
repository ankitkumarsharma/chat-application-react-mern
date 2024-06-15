import User from "../models/user.models.js";

export const getUsersForSidebar = async (req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        const allUsersExCurrentUser = await User.find({_id: {$ne: loggedInUserId}}).select('-password');
        res.status(201).json(allUsersExCurrentUser);
        
    } catch (error) {
        console.log("Error from getUsersForSidebar controller: ",error);
        res.status(500).json({ error: "Internal Server Error!"});
    }
}