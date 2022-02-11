const express = require('express');

const app = express();
const PORT = 4000;

app.use((req, res, next) => {
  console.log('Hey middle ware ');
  next();
});

app.get('/', (req, res) => {
  console.log(
    req.ip,
    req.headers['x-forwarded-for'] || req.socket.remoteAddress
  );
  res.status(200).send('hey node Get request'); // only express has req.ip not core http modules throws undefined
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
