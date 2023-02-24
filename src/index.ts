import dotenv from "dotenv"
dotenv.config()
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express, { Request, Response } from "express"
import cors from "cors"

AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!")
}).catch(error => console.log(error))

const app = express()
const PORT = process.env.PORT
const corsOptions = {
    origin: ["http://localhost:3000"]
}

app.use(cors(corsOptions))
app.use(express.json())

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
