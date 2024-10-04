const express = require('express');
const cors = require('cors');
const sequelize = require('./config/config');
const contractRoutes = require('./routes/contractRoutes');
const litigationRoutes = require('./routes/litigationRoutes');
const legislationRoutes = require('./routes/legislationRoutes');
const fileRoutes = require('./routes/fileRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/contracts', contractRoutes);
app.use('/api/litigations', litigationRoutes);
app.use('/api/legislations', legislationRoutes);
app.use('/api/files', fileRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err));
