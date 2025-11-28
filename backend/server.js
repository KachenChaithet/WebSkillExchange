import express from 'express'
import cors from 'cors'
import { WebSocketServer } from 'ws'
import { createServer } from 'http'
import dotenv from 'dotenv'
import { Socket } from 'dgram'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

const server = createServer(app)
const wss = new WebSocketServer({ server })

wss.on('connection', (ws) => {
    console.log('this use online');
    ws.send('hello world')
    ws.on('close    ', () => {
        console.log('user out');
    })


})


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.post('/users', async (req, res) => {
    res.send('hello world')
})


server.listen(port, () => {
    console.log('server run on http://localhost:' + port);
    console.log('ws ready ws://localhost:' + port);

})