const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Express version is 4.16+ so bodyparser support enabled default
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hey middle ware ', __dirname, __filename);
  next();
});

// Below line allows you to run the public/index.html file automatically when you run localhost:4000 instead of routes
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  console.log(
    req.ip
    // req.ip,
    // req.headers['x-forwarded-for'] || req.socket.remoteAddress
  );
  res.status(200).send('hey node Get request'); // only express has req.ip not core http modules throws undefined
});

app.post('/login', (req, res) => {
  res.send(req.body, __dirname, __filename);
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
