const PORT = process.env.PORT || 8000;
import axios from 'axios';
import express from 'express';
import cors from 'cors';
import { refineData } from './utils/utils.js';

const app = express();
app.use(cors());

const restCountriesAPI = 'https://restcountries.com/v3.1/name/';

app.get('/:name', async (req, res) => {
  const name = req.params.name;

  try {
    const response = await axios.get(`${restCountriesAPI}${name}`);
    const refindedData = refineData(response.data);
    res.status(200).json({
      data: refindedData,
    });
  } catch (error) {
    console.error(error);
  }
})

app.listen(PORT, () => console.log('Server running on PORT 8000'));
