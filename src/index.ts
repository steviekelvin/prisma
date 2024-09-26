import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.EXPRESS_PORT ?? 3000;

routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
