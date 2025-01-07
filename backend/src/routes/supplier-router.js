import { Router } from "express";
import { autentication } from "../controllers/error-controller.js";
import { createSupplier, deleteSupplier, generateExcel, generatePdf, getAllSupplier, getSupplierById, updateSupplier } from "../controllers/supplier-controller.js";
const supplierRouter = Router();

supplierRouter.get("/suppliers", autentication, getAllSupplier);
supplierRouter.get("/suppliers/:id", autentication, getSupplierById);
supplierRouter.post("/suppliers", autentication, createSupplier);
supplierRouter.put("/suppliers/:id", autentication, updateSupplier);
supplierRouter.delete("/suppliers/:id", autentication, deleteSupplier);
supplierRouter.get("/suppliers-pdf", autentication, generatePdf);
supplierRouter.get("/suppliers-excel", autentication, generateExcel);

export default supplierRouter;
