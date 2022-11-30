"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const consulta_controller_1 = require("./../controller/consulta.controller");
exports.route = (0, express_1.Router)({ caseSensitive: false });
const consult = new consulta_controller_1.ConsultaController();
//consultas endpoints
exports.route.get("/consultas", consult.getAll);
exports.route.get("/consulta/:id", consult.getById);
exports.route.get("/consultas/:param", consult.getConsultas);
exports.route.post("/consultas", consult.postConsulta);
exports.route.put("/consulta/:id", consult.updateConsulta);
exports.route.delete("/consulta/:id", consult.deleteConsulta);
exports.route.get("/", async (req, res) => {
    return res.status(200).send({ message: "Consulta is running" });
});
