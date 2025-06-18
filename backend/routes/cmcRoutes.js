const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const CMC_BASE = 'https://pro-api.coinmarketcap.com/v1';
const HEADERS = {
  'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY
};

// 📊 1. Bitcoin Dominance
router.get('/btc-dominance', async (req, res) => {
  try {
    const response = await axios.get(`${CMC_BASE}/global-metrics/quotes/latest`, { headers: HEADERS });
    const btcDominance = response.data.data.btc_dominance;
    res.json({ btcDominance });
  } catch (error) {
    console.error('BTC Dominance error:', error.message);
    res.status(500).json({ error: 'Erreur Bitcoin Dominance' });
  }
});

// 😱 2. Fear & Greed Index (via alternative.me relay ou autre si dispo dans CMC)
router.get('/fear-greed', async (req, res) => {
  try {
    const response = await axios.get('https://api.alternative.me/fng/');
    const data = response.data.data[0];
    res.json({ value: data.value, classification: data.value_classification });
  } catch (error) {
    console.error('Fear & Greed error:', error.message);
    res.status(500).json({ error: 'Erreur Fear & Greed Index' });
  }
});

// 🚀 3. Altcoin Season Index (via un service tiers, CMC ne le fournit pas directement)
router.get('/altcoin-season', async (req, res) => {
  try {
    const response = await axios.get('https://api.blockchaincenter.net/altcoin-season-index');
    res.json({ altcoinSeasonIndex: response.data.values.at(-1) }); // Dernière valeur
  } catch (error) {
    console.error('Altcoin Season error:', error.message);
    res.status(500).json({ error: 'Erreur Altcoin Season Index' });
  }
});

// 📈 4. Bitcoin ETF Tracker (via CMC ETF listing ou à défaut via Finbold/Nasdaq API tier)
router.get('/btc-etf', async (req, res) => {
  try {
    const response = await axios.get(`${CMC_BASE}/cryptocurrency/info`, {
      headers: HEADERS,
      params: {
        symbol: 'BTC'
      }
    });
    res.json({ info: response.data.data.BTC });
  } catch (error) {
    console.error('Bitcoin ETF error:', error.message);
    res.status(500).json({ error: 'Erreur Bitcoin ETF Tracker' });
  }
});

module.exports = router;
