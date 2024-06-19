import { Schema, model, models} from 'mongoose';
import User from "./user";

const TaskSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    task: {
        type: String,
        required: [true, 'task is required.'],
    },
    description: {
        type: String,
        required: [true, 'description is required.'],
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});


const Task = models.Task || model('Task', TaskSchema);
export default Task;