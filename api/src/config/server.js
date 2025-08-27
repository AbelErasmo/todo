import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

const app = express();

const __filename = fileURLToPath(import.meta.url);
// const __dir = path.dirname(__filename);

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('../public'));

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

export default app;
