const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');
require('dotenv').config();


app.use(cors());

app.use(express.json());

db(process.env.DB_LINK);

const authrouter = require('./routes/authrouter');
app.use('/', authrouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
