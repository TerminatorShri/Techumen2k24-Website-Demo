import express from "express";
import cors from "cors";
import techumentRouter from "./routes/techumen.routes.js";

const app = express();

const corsOptions = {
    origin: function (origin, callback) {
        if (process.env.CORS_ORIGIN.split(",").includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cors());

app.use("/api/v1/techumen", techumentRouter);

export default app;
