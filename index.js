const http = require('http');

function compose(...fns) {

}

const homepage = (ctx) => `
  <html>
    <link rel="stylesheet" href="https://unpkg.com/normalize.css@7.0.0/normalize.css" />
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <style>
      * {
        font-family: 'Lato'
      }
    </style>
    <body>
      <h1>${ctx.message}</h1>
    </body>
  </html>
`;

const app = () => ({
  listen(port, cb) {
    console.log(`App listening on port ${port}`);
    http.createServer(function (req, res) {
      const now = new Date();

      res.on('finish', function () {
        console.log(`${now}: ${req.method} ${req.url} => ${res.statusCode}`);
      });

      return cb(req, res);
    }).listen(port);
  }
});

app().listen(3000, function (req, res) {
  body = homepage({
    message: "Hello World"
  });
  res.setHeader('content-type', 'text/html');
  res.setHeader('content-length', body.length);
  res.end(body);
});
