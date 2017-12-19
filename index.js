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

http.createServer(function (req, res) {
  body = homepage({
    message: "Hello World"
  });
  res.setHeader('content-type', 'text/html');
  res.setHeader('content-length', body.length);
  res.end(body);
}).listen(3000);
