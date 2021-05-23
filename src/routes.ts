import { request, Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { SettingsController } from "./controllers/SettingsController";
import { MessagesController } from "./controllers/MessagesController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);


export { routes };