const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

let sessionToken = null;

async function loginToMyFxBook() {
  try {
    const res = await axios.get('https://www.myfxbook.com/api/login.json', {
      params: {
        email: process.env.MYFXBOOK_EMAIL,
        password: process.env.MYFXBOOK_PASSWORD
      }
    });

    if (res.data.error) {
      throw new Error(res.data.message || 'Login failed');
    }

    sessionToken = res.data.session;
    console.log('🔐 MyFxBook Login successful');
  } catch (error) {
    console.error('Erreur de login MyFxBook :', error.message);
  }
}

router.get('/', async (req, res) => {
  try {
    if (!sessionToken) {
      await loginToMyFxBook();
    }

    const sentimentRes = await axios.get('https://www.myfxbook.com/api/get-community-outlook.json', {
      params: {
        session: sessionToken
      }
    });

    if (sentimentRes.data.error) {
      // Retry login si token invalide
      await loginToMyFxBook();
      const retryRes = await axios.get('https://www.myfxbook.com/api/get-community-outlook.json', {
        params: {
          session: sessionToken
        }
      });
      return res.json(retryRes.data);
    }

    res.json(sentimentRes.data);
  } catch (error) {
    console.error('Erreur Retail Positioning:', error.message);
    res.status(500).json({ error: 'Erreur récupération Retail Positioning' });
  }
});

module.exports = router;

