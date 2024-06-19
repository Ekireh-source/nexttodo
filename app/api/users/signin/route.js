import { connectToDB } from "@utils/database";
import User from "@modals/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";





export const POST = async(req) => {

    try {
        await connectToDB();
        const {password, email} = await req.json();
        //check for user
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status:400})
            
        }
        //check for password    
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status:400});
        }

        //create token data
        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email

        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({message: "Login successful"}, {status:201});

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status:500});
    }
}