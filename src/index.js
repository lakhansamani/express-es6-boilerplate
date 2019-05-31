import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3400;

app.listen(port, () => console.log(`🚀 Server is listening on ${port}`));
export default app;
