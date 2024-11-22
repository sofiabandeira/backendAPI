import express from "express";
import dotenv from "dotenv"; 
import {selectUsuarios} from "./bd.js";   

dotenv.config();

const app = express();          
const port = 3000;                 

app.get("/", (req, res) => {      
  console.log("Rota GET/ solicitada");
  res.json({
    nome1: "Emanuel Miranda",
    nome2: "Eduardo Sabino",     
  });
});

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
  console.log("Rota GET/usuarios solicitada");
});

app.listen(port, () => {       
  console.log(`Serviço escutando na porta:  ${port}`);
});







