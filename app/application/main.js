import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import not_found from './404' 
import debug from './debug'

require('dotenv').config();

const app = express();

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {    
    res
        .status(200)
        .json({
            data: "Hello World"
        })
})

app.use(not_found);

if (app.get('env') === 'development') {
    app.use(debug);
}


export default app
