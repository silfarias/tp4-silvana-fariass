import express from "express";
import helmet from "helmet";
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(helmet());
app.use(cors())
app.use(morgan('tiny'));
app.use(express.json())

app.listen(4000, () => {
    console.log("server running on port", 4000);
});