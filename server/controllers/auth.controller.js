import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
export const login = (req, res) => {
    res.send("Welcome to login");
}

export const logout = (req, res) => {
    res.send("Welcome to logout");
}

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and Confirm Password not matched!!!" })
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exists!!!" });
        }

        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
        if (newUser) {
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
                gender: newUser.gender,
                createdAt: newUser.createdAt,
            });
        } else {
            res.status(400).json({ error: "Invalid User Data!!!" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}