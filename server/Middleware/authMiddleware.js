import Jwt from 'jsonwebtoken'

export default function (req, res, next) {
    if (req.method === "OPTIONS")
        return next()

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token)
            return res.status(403).json({ message: "Пользователь не авторизован" })

        req.user = Jwt.verify(token, process.env.token_key)

        next()
    }
    catch (error) {
        return res.status(403).json({ message: "Пользователь не авторизован" })
    }
}