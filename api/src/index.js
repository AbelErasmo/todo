import dotenv from "dotenv";
dotenv.config();
import app from "./config/server.js";
import connection from "./config/db_Connection.js";

const PORT = process.env.PORT;

connection().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
