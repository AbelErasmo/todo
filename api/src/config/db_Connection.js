import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

// console.log(process.env.MONGO_URL);
const MONGO_URL = process.env.MONGO_URL;

const connection = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Conexao com base de dados estabelecida com sucesso");

    } catch (error) {
        console.log("Falha ao estabelecer a conexao", error);
        process.exit(1);
    }
}

export default connection;