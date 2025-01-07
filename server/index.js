import './utils/configEnv.js'
import './utils/dbConfig.js'
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import labsRoute from "./routes/labsRoute.js"
import equipRoute from "./routes/equipRoute.js"
import userRoute from "./routes/userRoute.js"
import emailRoute from "./routes/emailRoute.js"
import path from "path"
import { fileURLToPath } from 'url';

const app = express();
dotenv.config(); 
 
const PORT = process.env.PORT || 6001;

var corsOptions = {
    // origin:['http://localhost:3001','https://nmit-labs-be.vercel.app/'],
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// middlewares
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
// app.use(express.urlencoded());

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/labs", labsRoute)
app.use("/api/equip", equipRoute)
app.use("/api/send-mail", emailRoute)

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMsg = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status:errorStatus, 
        message:errorMsg,
        stack: err.stack 
    })
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "uploads")));
const distPath = path.join(__dirname, "build");
app.use(express.static(distPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });

app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`)
}) 
