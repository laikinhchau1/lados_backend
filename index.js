import express from'express'

const app = express()
import path from'path'
import connect from './src/configs/db';
import bodyParser from 'body-parser';
import configViewEngine from './src/configs/viewEngine';
import cookieParser from 'cookie-parser';

import routes from "./src/routes/index"
connect()
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, '/public/assets/img')))
app.use('/public', express.static(path.join(__dirname, '/src/public')))
app.set("views", path.join(__dirname, "/src/views"))
configViewEngine(app)
app.use('/',routes)

app.listen(8000)