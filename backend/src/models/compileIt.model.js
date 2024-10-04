import mongoose from "mongoose";

const compileItSchema = new mongoose.Schema({
    leaderName: {
        type: String,
        required: true,
    },
    leaderCollegeName: {
        type: String,
        required: true,
    },
    collegeId: {
        type: String,
        required: true,
    },
    leaderEmail: {
        type: String,
        required: true,
    },
    leaderContactNum: {
        type: String,
        required: true,
    },
    leaderHackerrankId: {
        type: String,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    memberName: {
        type: String,
        required: true,
    },
    memberCollegeName: {
        type: String,
        required: true,
    },
    memberContactNum: {
        type: String,
        required: true,
    },
    laptopAvailable: {
        type: Boolean,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
        unique: true,
    },
    transactionPhoto: {
        type: String,
        required: true,
    },
});

export const CompileIt = mongoose.model("CompileIt", compileItSchema);
