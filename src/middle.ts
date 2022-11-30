import compression from "compression";
import cors from "cors";
import express from "express";
import * as swaggerUi from "swagger-ui-express";
import swaggerDoc from "../swagger.json";

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(compression({ memLevel: 2 }))

import { route } from "./routes/all.routes";
app.use(route)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));