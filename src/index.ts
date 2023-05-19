import * as express from "express";
import { Request } from "express";
import * as dotenv from "dotenv";
import routes from "./routes";
import * as cors from 'cors'

dotenv.config();

// cria o servidor e coloca na variável app
const app = express();
// suporta parâmetros JSON no body da requisição
app.use(express.json()); 
app.use(cors<Request>());

const PORT = process.env.PORT || 3000;

// inicializa o servidor na porta especificada
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
// define a rota para o pacote /routes
app.use(routes);