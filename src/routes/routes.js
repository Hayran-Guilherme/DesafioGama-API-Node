import { Router } from "express";
import { createUser, deleteUserById, DeleteUserById, findAllUsers, findOneUser, updateUserById } from "../controllers/users/users.controller.js"

const routes = Router()

// PSICOLOGOS
routes.post('/psicologos', createUser);
routes.get('/psicologos', findAllUsers);
routes.get('/psicologos/:id', findOneUser);
routes.put('/psicologos/:id', updateUserById);
routes.delete('/psicologos/:id', deleteUserById);

// PACIENTES

// ATENDIMENTOS

export default routes;