import { Router } from "express";
const router = Router()

// Controllers
import HomeController from "./controllers/homeControllers.js"
import ContactController from "./controllers/contactControllers.js"
import AdminController from "./controllers/adminControllers.js"

// Middleware
import MD from "./middlewares/index.js"

/*
 * Routes
 ******** */

router.route('/')
    .get(MD.test_md, HomeController.getPage)

router.route('/contact')
    .get(MD.test_md, ContactController.getPage)
    .post(MD.test_md, ContactController.post)

    router.route('/admin')
    .get(MD.admin, AdminController.getPage)

// Warn to export default !!
export default router