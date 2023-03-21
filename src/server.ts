import express from "express";
import bodyParser from "body-parser"; "body-parser";
import router from "./router";

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    setTimeout(() => {
      next(new Error('hello'))
    },1)
  })

app.use('/api', router);

export default app;