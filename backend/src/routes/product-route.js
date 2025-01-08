import { Router } from "express";
import { autentication } from "../controllers/error-controller.js";
import { createProduct, deleteProduct, generateExcel, generatePdf, getAllProduct, getProductByCategory, getProductById, updateProduct } from "../controllers/product-controller.js";
const productRouter = Router();

productRouter.post("/products", autentication, createProduct);
productRouter.get("/products", autentication, getAllProduct);
productRouter.get("/products/:id", autentication, getProductById);
productRouter.get("/products/category/:id", autentication, getProductByCategory);
productRouter.put("/products/:id", autentication, updateProduct);
productRouter.delete("/products/:id", autentication, deleteProduct);
productRouter.get("/products-pdf", autentication, generatePdf);
productRouter.get("/products-excel", autentication, generateExcel);

export default productRouter;
