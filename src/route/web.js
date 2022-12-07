import express from "express"
import loginController from "../controller/loginController"
import homeController from "../controller/homeController"

let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", loginController.getLoginPage);
    router.post("/login", loginController.loginHomePage);
    router.get("/register", loginController.registerPage);
    router.post("/registered", loginController.registeredUsers);
    router.get("/home", homeController.getHomePage);
    return app.use('/', router)
}

export default initWebRoute;