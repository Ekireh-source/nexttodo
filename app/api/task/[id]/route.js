import Task from "@modals/task";
import { connectToDB } from "@utils/database";

export const GET = async(req, {params}) => {

    
    try {
        await connectToDB();
        
        const task = await Task.findById(params.id);
        

        if(!task){
            return new Response("Task does not exist", { status:404 });
        };
        return new Response(JSON.stringify(task), { status:200 });
        
    } catch (error) {

        return new Response("System error", { status:500 });
    }
};


export const DELETE = async(req, {params}) => {
    try {
        await connectToDB();
        await Task.findByIdAndDelete(params.id);
        return new Response("Task has been successfully deleted", { status:200 });
        
    } catch (error) {
        return new Response("Failed to delete task", { status:500 })
    }
};



export const PATCH = async(req, {params}) => {
    const { title, description } = await req.json();

    try {
        await connectToDB();
        
        const existingTask = await Task.findById(params.id);

        existingTask.title = title;
        existingTask.description = description;
        existingTask.save();

        return new Response(JSON.stringify(existingTask), { status:200 })

    } catch (error) {
        return new Response("Failed to update the task", { status:500 })
    }
};