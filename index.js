// import du framework ExpressJS
import express from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser';

const app = express()
dotenv.config()
const { PORT } = process.env

// Config Handlebars
import helpers from './helpers/index.js';

app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayout: "main",
  helpers: {
    limitArray: helpers.limitArray,
    upper: helpers.upper
  }
}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Fichier static
app.use('/assets', express.static('public'))

// Body Parser (Pour formater le body des request http (post, ...) au format json)
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

import router from "./api/router.js"
app.use(router)

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!')
})