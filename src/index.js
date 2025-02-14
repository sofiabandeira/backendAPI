import express from "express";
import dotenv from "dotenv"; 
import { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "./db/index.js";   
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

const app = express();          
const port = 3000;

app.use(express.json());
app.use(roteadorUsuario);
app.get("/", (req, res) => {      
  console.log("Rota GET/ solicitada");
  res.json({
    nome1: "Emanuel Miranda",
    nome2: "Eduardo Sabino",     
  });
});


app.listen(port, () => {       
  console.log(`Serviço escutando na porta:  ${port}`);
});







