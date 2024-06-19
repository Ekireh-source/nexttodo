import { connectToDB } from "@utils/database";
import Task from "@modals/task";


export const POST = async(req, res) => {
    const { task, description } = await req.json();

    console.log(task, description);

    try {
        console.log("create is running");
        await connectToDB();
        const newTask = new Task({
            task,
            description
        });
        
        await newTask.save();
        return new Response(JSON.stringify(newTask), {status:201})
    } catch (error) {
        return new Response("Failed to create new task", {status:500})
    }
}