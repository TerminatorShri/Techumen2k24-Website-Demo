import mongoose from "mongoose";

const codeblastschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
        required: true,
    },
    collegeId: {
        type: String,
        required: true,
    },
    yearOfStudy: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNum: {
        type: String,
        required: true,
    },
    hackerrankId: {
        type: String,
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

export const CodeBlast = mongoose.model("CodeBlast", codeblastschema);
