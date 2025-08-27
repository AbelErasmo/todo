import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    UserId: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const modelTask =  mongoose.model('Task', taskSchema);

export default modelTask;