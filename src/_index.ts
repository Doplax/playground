import "./exercices/prueba";

import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola, mundo!");
});

app.listen(PORT, () => {});
