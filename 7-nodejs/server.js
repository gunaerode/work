const http = require('http');
const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  console.log('Server created');

  //   console.log(`Header:`, req.headers);
  console.log(`Host`, req.headers.host);
  //   console.log(`IP`, req.headers['x-forwarded-for'] || req.ip); // not working only in expressjs
  console.log(`Method: `, req.method);
  console.log(`Url`, req.url);

  //   res.setHeader('content-type', 'text/html');
  //   res.end('Hey NodeJs');
  res.setHeader('content-type', 'application/json');
  res.end(
    JSON.stringify({
      name: 'MG',
      age: 77,
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
