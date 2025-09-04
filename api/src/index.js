import dotenv from "dotenv";
dotenv.config();
import app from "./config/server.js";
import connection from "./config/db_Connection.js";
import taskRoute from "./routes/task.router.js";

const PORT = process.env.PORT;

connection().then(() => {
    app.use('/api', taskRoute);
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
