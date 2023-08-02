import User from "./Models/User.js"
import bcrypt from "bcryptjs"
import { validationResult } from "express-validator"
import Jwt from "jsonwebtoken"
import Label from "./Models/Label.js"

const generateAccessToken = (id) => {
    const payload = { id }
    return Jwt.sign(payload, process.env.token_key, { expiresIn: "24d" })
}

class authController {
    async signUp(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty())
                return res.status(400).json({ message: "Данные не правильно заполнены!", errors })

            const { username, password } = req.body

            const candidate = await User.findOne({ username })
            if (candidate)
                return res.status(400).json({ message: "Пользователь с таким именем уже существует" })

            const hashPassword = bcrypt.hashSync(password, 6)
            const user = new User({
                username,
                password: hashPassword,
            })
            await user.save()

            const resData = {
                message: "Пользователь успешно зарегистрирован!",
                signUp: true
            }

            return res.json(resData)

        } catch (error) {
            res.status(500).json(error)
        }
    }
    async signIn(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })

            if (!user)
                return res.status(400).json({ message: `Пользователь ${username} не найден` })

            //RE-HASH of password
            const validPassword = bcrypt.compareSync(password, user.password)

            if (!validPassword)
                return res.status(400).json({ message: "Пароль неверный" })

            const resData = {
                username: user.username,
                token: generateAccessToken(user._id),
            }

            return res.json(resData)

        } catch (error) {
            res.status(400).json({ message: "login error" })
        }
    }
    async deleteUser(req, res) {
        try {
            const userId = Jwt.decode(req.headers.authorization.split(" ")[1]).id

            // Удалить все наклейки пользователя
            const deleteLabels = await Label.deleteMany({ user_id: userId })

            // Удалить пользователя
            const deleteUser = await User.deleteOne({ _id: userId })

            if (deleteUser.deletedCount !== 1)
                return res.status(404).json({ message: "Пользователь не найден" })

            return res.json({ message: "Пользователь успешно удален" })

        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка при удалении пользователя:", error })
        }
    }
    async updateUsername(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty())
                return res
                    .status(400)
                    .json({ message: "Данные не правильно заполнены!", errors })

            const userId = Jwt.decode(req.headers.authorization.split(" ")[1]).id

            const { username } = req.body

            const candidate = await User.findOne({ username })
            if (candidate)
                return res.status(400).json({ message: "Пользователь с таким именем уже существует" })



            await User.findByIdAndUpdate(
                userId,
                { $set: { username } },
                { new: true }
            )

            return res.json({
                message: "Данные пользователя успешно обновлены",
                user: username,
            })

        } catch (error) {
            return res.status(500).json({
                message: "Ошибка при изменений данных пользователя:",
                error,
            })
        }
    }
}

export default new authController()
