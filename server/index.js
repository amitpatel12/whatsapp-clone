import express from 'express'
import cors from 'cors'
const app = express()
import bodyParser from 'body-parser'
import Connectin from './database/db.js'
import Route from './routes/route.js'
const PORT = 8000 || process.env.PORT



app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }))


Connectin()


app.use('/', Route)

app.listen(PORT, ()=> console.log('listening on port' + PORT))