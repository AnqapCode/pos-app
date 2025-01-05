import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "../controllers/kategory-controller.js";
import { autentication } from "../controllers/error-controller.js";
const categoryRoute = Router();

categoryRoute.get("/categories", autentication, getAllCategory);
categoryRoute.get("/categories/:id", autentication, getCategoryById);
categoryRoute.post("/categories", autentication, createCategory);
categoryRoute.put("/categories/:id", autentication, updateCategory);
categoryRoute.delete("/categories/:id", autentication, deleteCategory);

export default categoryRoute;
