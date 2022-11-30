import { Router } from "express";
import { ConsultaController } from './../controller/consulta.controller';

export const route = Router({ caseSensitive: false });

const consult = new ConsultaController();

//consultas endpoints
route.get("/consultas", consult.getAll);

route.get("/consulta/:id", consult.getById);

route.get("/consultas/:param", consult.getConsultas)

route.post("/consultas", consult.postConsulta);

route.put("/consulta/:id", consult.updateConsulta);

route.delete("/consulta/:id", consult.deleteConsulta);

route.get("/", async (req, res) => {
    return res.status(200).send({ message: "Consulta is running" })
})
