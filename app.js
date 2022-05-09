const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const routes = require('./Routes/Route')
const bodyParser = require(`body-parser`)
require('./src/Database/Database');
const Model = require('./src/Models/user');

const staticPath = path.join(__dirname, `/public`);
app.use(express.static(staticPath));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Adding Routes to the webstie
// const jwt = require('jsonwebtoken');
// const createToken = async () => {
//     const token = await jwt.sign({ _id: "62701344091362348ad0c64e" }, "mynameisvikramsinghdewdaamillionear",{
//         expiresIn:"2 minutes"
//     })
//     console.log(token);
//     const userVerify = await jwt.verify(token, "mynameisvikramsinghdewdaamillionear")
//     console.log(userVerify);
// };
// createToken();
