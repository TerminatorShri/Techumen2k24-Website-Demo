import express from "express";
import techumenController from "../controllers/techumen.controller.js";
import just from "../middlewares/just.js";
import {upload} from "../middlewares/multer.middleware.js";
const {
    addNewWebnaticEntry,
    addNewCodeBlastEntry,
    addNewCompileItEntry,
    addNewPuzzleVaultEntry,
} = techumenController;

const router = express.Router();

const uploadFields = upload.fields([
    { name: "transactionPhoto", maxCount: 1 }, 
    { name: "idCardPhoto", maxCount: 1 }, 
]);
router.post("/webnatic",just, uploadFields, (req, res) => {
    console.log("POST request received for /techumen/webnatic");
    addNewWebnaticEntry(req, res);
});

router.post("/codeblast", uploadFields, (req, res) => {
    console.log("POST request received for /techumen/codeblast");
    addNewCodeBlastEntry(req, res);
});

router.post("/compileit", uploadFields, (req, res) => {
    console.log("POST request received for /techumen/compileit");
    addNewCompileItEntry(req, res);
});

router.post("/puzzlevault", uploadFields, (req, res) => {
    console.log("POST request received for /techumen/puzzlevault");
    addNewPuzzleVaultEntry(req, res);
});

export default router;
