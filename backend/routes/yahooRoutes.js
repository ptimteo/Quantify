const express = require('express');
const router = express.Router();
const yahooFinance = require('yahoo-finance2').default;

router.get('/:symbol', async (req, res) => {
  const { symbol } = req.params;

  try {
    const result = await yahooFinance.historical(symbol, {
      period1: '2022-01-01',
      interval: '1d',
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erreur Yahoo Finance' });
  }
});

module.exports = router;
