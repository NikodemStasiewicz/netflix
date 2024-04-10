import express from "express";
import authRouter from "./routes/authRouter";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(
    cors({
      //origin: "http://localhost:3000",
      credentials: true,
    })
  );

  interface UserBasicInfo {
    _id: string;
    name: string;
    email: string;
  }
  
  declare global {
    namespace Express {
      interface Request {
        user?: UserBasicInfo | null;
      }
    }
  }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(authRouter);