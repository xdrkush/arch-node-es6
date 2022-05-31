// Modules
import { Router } from 'express';

// Controllers
import {
    // Test
    GetTest, PostTest,
} from '../controllers';

// Middlewares
import {
    checkHeader
} from '../middlewares'

const router = Router()

// Middleware all (*)
router.use(checkHeader)

router.route('/')
    .get(GetTest)
    .post(PostTest)


module.exports = router