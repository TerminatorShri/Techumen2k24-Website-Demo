import mongoose from "mongoose";

const webnaticSchema = new mongoose.Schema({
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

export const Webnatic = mongoose.model("Webnatic", webnaticSchema);
