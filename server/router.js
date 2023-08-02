import { Router } from "express"
import labelController from "./labelController.js"
import authController from "./authController.js"
import { check } from "express-validator"
import authMiddleware from "./Middleware/authMiddleware.js"

const router = new Router()

//! Авторизация и регистрация
router.post(
    '/signUp',
    [
        check('username', 'Имя пользователя должен быть больше 3 и меньше 15 символов').isLength({ min: 3, max: 15 }),
        check('password', 'Пароль должен быть больше 8 и меньше 12 символов').isLength({ min: 8, max: 12 })
    ],
    authController.signUp)

router.post('/signIn', authController.signIn)

//! Изменить "Имя пользователя"  пользователя
router.post(
    '/updateUsername',
    authMiddleware,
    [
        check('username', 'Имя пользователя должен быть больше 3 и меньше 15 символов').isLength({ min: 3, max: 15 })
    ],
    authController.updateUsername
)
//! Удалить пользователя
router.delete('/deleteUser', authMiddleware, authController.deleteUser)

//! Работа с наклейками
router.post('/labels', authMiddleware, labelController.create)
router.post('/deleteLabels', authMiddleware, labelController.delete)
router.post('/getLabels', authMiddleware, labelController.getLabels)
router.post('/changeLabels', authMiddleware, [
    check('barcode', 'Имя пользователя должен быть больше 3 и меньше 15 символов').isLength({ min: 3, max: 15 }),
], labelController.changeLabels)

export default router
