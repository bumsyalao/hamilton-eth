// use strict-mode;
'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import appConfig from './app/config';
import routes from './app/routes';


dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: any, res: any) => {
    res.send('Hamilton ETH API');
});

app.use('/api', routes)

app.listen(appConfig.port, () => {

    console.log(`[server]: Server is running at https://localhost:${appConfig.port}`);
});


