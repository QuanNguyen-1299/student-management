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
    router.post("/delete-student", homeController.deleteStudent);
    router.post("/create-new-student", homeController.createNewStudent);
    router.get('/update-student/:id', homeController.editStudent);
    router.post('/update-student', homeController.updateStudent);
    router.get('/home/search', homeController.searchStudent)
    return app.use('/', router)
}

export default initWebRoute;