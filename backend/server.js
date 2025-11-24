import express from 'express'
import cors from 'cors'
import { WebSocketServer } from 'ws'
import { createServer } from 'http'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

const server = createServer(app)
const wss = new WebSocketServer({ server })

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/',(req,res) => {
    res.send('hello world')
})


server.listen(port, () => {
    console.log('server run on http://localhost:' + port);
    console.log('ws ready ws://localhost:' + port);

})