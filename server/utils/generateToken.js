import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });

    res.cookie('jwt', token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent xss attacks  
        sameSite: 'strict', // csrf protection disabled
        secure: process.env.NODE_ENV !== 'dev'
    })
} 

export default generateTokenAndSetCookie;