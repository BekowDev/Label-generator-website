import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());
app.use('/api', router);


async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
    }
    catch (error) { console.log(error) }
}
startApp()
