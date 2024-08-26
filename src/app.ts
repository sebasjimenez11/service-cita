import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config(); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 10102;

import citas from './router/citas';
import pagos from './router/pagos';


app.use('/citas', citas);
app.use('/pagos', pagos);

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

export default app