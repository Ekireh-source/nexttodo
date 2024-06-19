import { connectToDB } from "@utils/database";
import Task from "@modals/task";
import User from "@modals/user";
import { connect } from "mongoose";


export const GET = async(req, res) => {
    
    try {
        await connectToDB();
        const tasks = await Task.find();
        return new Response(JSON.stringify(tasks), { status:200 });
    } catch (error) {
        return new Response("Failed to fetch Tasks", { status:500 });
    }
};