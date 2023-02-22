import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express() 
const PORT = process.env.PORT || 3001
const corsOptions = {
    origin: "http://localhost:3000",
}

app.use(cors(corsOptions))

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
