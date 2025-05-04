const express = require('express');
const cors = require('cors');
require('dotenv').config();

const yahooRoutes = require('./routes/yahooRoutes');
const fredRoutes = require('./routes/fredRoutes');
const cotRoutes = require('./routes/cotRoutes');
const retailRoutes = require('./routes/retailRoutes');
const cmcRoutes = require('./routes/cmcRoutes');
const ecbRoutes = require('./routes/ecbRoutes');

const app = express();
app.use(cors());

app.use('/api/yahoo', yahooRoutes);
app.use('/api/fred', fredRoutes);
app.use('/api/cot', cotRoutes);
app.use('/api/retail', retailRoutes);
app.use('/api/cmc', cmcRoutes);
app.use('/api', ecbRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur backend lancé sur le port ${PORT}`));
