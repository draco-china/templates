import { Nuxt, Builder } from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
// import gc from 'idle-gc'
import api from './api'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
