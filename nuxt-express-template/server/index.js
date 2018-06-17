import { Nuxt, Builder } from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
// import gc from 'idle-gc'
import api from './api'

const app = express()

