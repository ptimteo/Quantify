const express = require('express');
const axios = require('axios');
const router = express.Router();
const Papa = require('papaparse');

const COT_CODES = {
  sp500: '13874', // E-MINI S&P 500
  nasdaq: '20974', // E-MINI NASDAQ-100
  gold: '088691', // GOLD - COMMODITY EXCHANGE INC.
  btc: '133741', // BITCOIN - CME
};

const getCotUrl = (code) => `https://www.cftc.gov/dea/new_disaggregated_csv/${code}.csv`;

router.get('/:market', async (req, res) => {
  const { market } = req.params;
  const code = COT_CODES[market.toLowerCase()];

  if (!code) {
    return res.status(400).json({ error: 'Marché non pris en charge' });
  }

  try {
    const response = await axios.get(getCotUrl(code));
    const parsed = Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    });

    // On retourne les 4 dernières semaines de données COT
    const data = parsed.data.slice(-4);
    res.json({ market, data });
  } catch (error) {
    console.error('Erreur COT:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données COT' });
  }
});

module.exports = router;