import { Webnatic } from "../models/webnatic.model.js";
import { CodeBlast } from "../models/codeblast.model.js";
import { CompileIt } from "../models/compileIt.model.js";
import { PuzzleVault } from "../models/puzzleVault.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadImageToCloudinary } from "../utils/UploadToCloudinary.js";

const addNewWebnaticEntry = async (req, res) => {
    try {
        const {
            name,
            collegeName,
            yearOfStudy,
            email,
            contactNum,
            laptopAvailable,
            transactionId,
        } = req.body;

        let transactionPhoto = null;
        let collegeIdPhoto = null;

        // Upload transactionPhoto and collegeIdPhoto to Cloudinary
        console.log(req.files)
        if (
            req.files &&
            req.files.transactionPhoto &&
            req.files.idCardPhoto
        ) {
            try {
                transactionPhoto = await uploadImageToCloudinary(
                    req.files.transactionPhoto[0].buffer
                );
                console.log(transactionPhoto)
                collegeIdPhoto = await uploadImageToCloudinary(
                    req.files.idCardPhoto[0].buffer
                );
                console.log(collegeIdPhoto)
            } catch (err) {
                console.error("Image upload to Cloudinary failed:", err);
            }
        }

        const newEntry = new Webnatic({
            name,
            collegeName,
            yearOfStudy,
            email,
            contactNum,
            laptopAvailable,
            transactionId,
            transactionPhoto: transactionPhoto || "default-placeholder.jpg",
            collegeId: collegeIdPhoto || "default-placeholder.jpg",
        });

        await newEntry.save();

        res.status(200).send({
            success: true,
            message:"New entry saved successfully"
        })
    } catch (error) {
        console.error("Error adding new entry:", error);
        res.status(500).json(
            new ApiError(500, "Error adding new entry", [error])
        );
    }
};

const addNewCodeBlastEntry = async (req, res) => {
    try {
        const {
            name,
            collegeName,
            yearOfStudy,
            email,
            contactNum,
            hackerrankId,
            transactionId,
        } = req.body;

        let transactionPhoto = null;
        let collegeIdPhoto = null;

        // Upload transactionPhoto and collegeIdPhoto to Cloudinary
        if (
            req.files &&
            req.files.transactionPhoto &&
            req.files.idCardPhoto
        ) {
            try {
                transactionPhoto = await uploadImageToCloudinary(
                    req.files.transactionPhoto[0].buffer
                );
                collegeIdPhoto = await uploadImageToCloudinary(
                    req.files.idCardPhoto[0].buffer
                );
            } catch (err) {
                console.error("Image upload to Cloudinary failed:", err);
            }
        }

        const newEntry = new CodeBlast({
            name,
            collegeName,
            yearOfStudy,
            email,
            contactNum,
            hackerrankId,
            transactionId,
            transactionPhoto: transactionPhoto || "default-placeholder.jpg",
            collegeId: collegeIdPhoto || "default-placeholder.jpg",
        });

        await newEntry.save();

        res.status(200).send({
            success: true,
            message: `New CodeBlast entry saved successfully for: ${name}`,
        });
    } catch (error) {
        console.error("Error adding new CodeBlast entry:", error);
        res.status(500).json(
            new ApiError(500, "Error adding new CodeBlast entry", [error])
        );
    }
};


const addNewCompileItEntry = async (req, res) => {
    try {
        const {
            leaderName,
            leaderCollegeName,
            leaderEmail,
            leaderContactNum,
            leaderHackerrankId,
            teamName,
            memberName,
            memberCollegeName,
            memberContactNum,
            laptopAvailable,
            transactionId,
        } = req.body;

        console.log(req.body);

        let transactionPhoto = null;
        let collegeIdPhoto = null;

        // Upload transactionPhoto and collegeIdPhoto to Cloudinary
        if (
            req.files &&
            req.files.transactionPhoto &&
            req.files.idCardPhoto
        ) {
            try {
                transactionPhoto = await uploadImageToCloudinary(
                    req.files.transactionPhoto[0].buffer
                );
                collegeIdPhoto = await uploadImageToCloudinary(
                    req.files.idCardPhoto[0].buffer
                );
            } catch (err) {
                console.error("Image upload to Cloudinary failed:", err);
            }
        }

        const newEntry = new CompileIt({
            leaderName,
            leaderCollegeName,
            leaderEmail,
            leaderContactNum,
            leaderHackerrankId,
            teamName,
            memberName,
            memberCollegeName,
            memberContactNum,
            laptopAvailable,
            transactionId,
            transactionPhoto: transactionPhoto || "default-placeholder.jpg",
            collegeId: collegeIdPhoto || "default-placeholder.jpg",
        });

        await newEntry.save();

        res.status(200).send({
            success: true,
            message: `New CompileIt entry saved successfully for leader: ${leaderName}`,
        });
    } catch (error) {
        console.error("Error adding new CompileIt entry:", error);
        res.status(500).json(
            new ApiError(500, "Error adding new CompileIt entry", [error])
        );
    }
};

const addNewPuzzleVaultEntry = async (req, res) => {
    try {
        const {
            leaderName,
            leaderCollegeName,
            leaderContactNum,
            teamName,
            member1_Name,
            member1_CollegeName,
            member1_ContactNum,
            member2_Name,
            member2_CollegeName,
            member2_ContactNum,
            member3_Name,
            member3_CollegeName,
            member3_ContactNum,
            transactionId,
        } = req.body;

        console.log(req.body);
        let transactionPhoto = null;
        let collegeIdPhoto = null;

        // Upload transactionPhoto and collegeIdPhoto to Cloudinary
        if (
            req.files &&
            req.files.transactionPhoto &&
            req.files.idCardPhoto
        ) {
            try {
                transactionPhoto = await uploadImageToCloudinary(
                    req.files.transactionPhoto[0].buffer
                );
                collegeIdPhoto = await uploadImageToCloudinary(
                    req.files.idCardPhoto[0].buffer
                );
            } catch (err) {
                console.error("Image upload to Cloudinary failed:", err);
            }
        }

        const newEntry = new PuzzleVault({
            leaderName,
            leaderCollegeName,
            leaderContactNum,
            teamName,
            member1_Name,
            member1_CollegeName,
            member1_ContactNum,
            member2_Name,
            member2_CollegeName,
            member2_ContactNum,
            member3_Name,
            member3_CollegeName,
            member3_ContactNum,
            transactionId,
            transactionPhoto: transactionPhoto || "default-placeholder.jpg",
            collegeIdLeader: collegeIdPhoto || "default-placeholder.jpg",
        });

        await newEntry.save();

        res.status(200).send({
            success: true,
            message: `New PuzzleVault entry saved successfully for leader: ${leaderName}`,
        });
    } catch (error) {
        console.error("Error adding new PuzzleVault entry:", error);
        res.status(500).json(
            new ApiError(500, "Error adding new PuzzleVault entry", [error])
        );
    }
};

export default {
    addNewWebnaticEntry,
    addNewCodeBlastEntry,
    addNewCompileItEntry,
    addNewPuzzleVaultEntry,
};
