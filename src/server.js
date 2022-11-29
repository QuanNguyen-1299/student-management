import express from "express"
import configViewEngine from "./configs/viewEngine"


const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000

//set up view engine
configViewEngine(app);

app.get('/', (req, res) => {
  res.render('login.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
