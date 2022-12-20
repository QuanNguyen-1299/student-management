import express from "express"
import bodyParser from "body-parser";
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "./route/web";

const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
//set up view engine
configViewEngine(app);
//set up wweb router
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
