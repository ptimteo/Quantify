const express = require('express');
const axios = require('axios');
const router = express.Router();

const FRED_API_KEY = '12cf82706082bfafe244490916dd87e9'; // Remplace par ta clé API

router.get('/:series_id', async (req, res) => {
  const { series_id } = req.params;
  try {
    const response = await axios.get(
      `https://api.stlouisfed.org/fred/series/observations`, {
        params: {
          api_key: FRED_API_KEY,
          file_type: 'json',
          series_id,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur FRED' });
  }
});

module.exports = router;
