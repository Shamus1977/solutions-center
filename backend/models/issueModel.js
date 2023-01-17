const mongoose = require("mongoose");

const issueSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    language:{
        type: String,
        required:[true, "Please select a product"],
        enum: ["Java", "JavaScript", "React", "Node", "Other"]
    },
    issueDescription:{
        type:String,
        required: [true, "You must enter a description of the issue."],
    },
    solutionDescription: {
        type:String,
        required: [true, "You must enter a description of thesolution."],
    },
    thumbsUp: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Issue", issueSchema);