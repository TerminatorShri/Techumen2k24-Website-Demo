import mongoose from "mongoose";

const puzzleVaultSchema = new mongoose.Schema({
    leaderName: {
        type: String,
        required: true,
    },
    leaderCollegeName: {
        type: String,
        required: true,
    },
    collegeIdLeader: {
        type: String,
        required: true,
    },
    leaderContactNum: {
        type: String,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    member1_Name: {
        type: String,
        required: true,
    },
    member1_CollegeName: {
        type: String,
        required: true,
    },
    member1_ContactNum: {
        type: String,
        required: true,
    },
    member2_Name: {
        type: String,
        required: true,
    },
    member2_CollegeName: {
        type: String,
        required: true,
    },
    member2_ContactNum: {
        type: String,
        required: true,
    },
    member3_Name: {
        type: String,
    },
    member3_CollegeName: {
        type: String,
    },
    member3_ContactNum: {
        type: String,
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

export const PuzzleVault = mongoose.model("PuzzleVault", puzzleVaultSchema);
