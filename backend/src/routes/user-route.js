import { Router } from "express";
import { createUser, deleteUser, getAllUser, getUserById, loginUser, setRefreshToken, updateUser } from "../controllers/user-controller.js";
import { autentication } from "../controllers/error-controller.js";
const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.put("/users/:id", autentication, updateUser);
userRouter.post("/users/login", loginUser);
userRouter.delete("/users/:id", autentication, deleteUser);
userRouter.get("/users", autentication, getAllUser);
userRouter.get("/users/refresh", autentication, setRefreshToken);
userRouter.get("/users/:id", autentication, getUserById);

export default userRouter;
