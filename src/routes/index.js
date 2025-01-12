import { Router } from "express";
import productRoutes from "./productRoutes.js";
import categoryRoutes from "./categoryRoutes.js";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/categories", categoryRoutes);

export default routes;
