// routes/ecbRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const ecbSeries = {
  gdp: 'NAMQ_10_GDP/A.C.LR_B1GQ.CLV10_MEUR.EA',
  cpi: 'PRC_HICP_MIDX/A.EA.HICP2015T1.IX',
  unemployment: 'UNE_RT_A/A.EA.T.TOTAL.Z',
  rate: 'FM.M.U2.EUR.4F.KR.MRR_FR.LEV',
  yield10y: 'FM.M.U2.EUR.RT.YLD.AC.GN10',
  retail: 'STS.M.EZ.S.CL.A0103.3.000',
  tradebalance: 'TEI.TPB.M.EA19.XNET' // Balance commerciale nette
};

router.get('/:indicator', async (req, res) => {
  const { indicator } = req.params;
  const seriesKey = ecbSeries[indicator];

  if (!seriesKey) {
    return res.status(400).json({ error: 'Indicateur invalide' });
  }

  try {
    const response = await axios.get(`https://data-api.ecb.europa.eu/service/data/${seriesKey}`, {
      headers: { Accept: 'application/json' }
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Erreur pour ${indicator}:`, error.message);
    res.status(500).json({ error: `Erreur pour ${indicator}` });
  }
});

module.exports = router;