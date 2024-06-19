import { connectToDB } from "@utils/database";
import User from "@modals/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';


export const POST = async(req) => {
    
    

    try{
        await connectToDB();

        const {name, email, password} = await req.json();
    
        const userExists = await User.findOne({email});
        if (!userExists) {
            //hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt)

            await User.create({
                name: name,
                email: email,
                password: hashedPassword
            })

            return NextResponse.json({message: "User successfully created"}, {status:201})
        } 
        return NextResponse.json({error: "User already exists"}, {status:400});     

    }catch (error) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}




//{loading ? "if loading is true" : "if loading is false"}