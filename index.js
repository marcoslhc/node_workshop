const http = require('http');

function compose(...fns) {

}

http.createServer(function (req, res) {
  body = `
    <html>
      <link rel="stylesheet" href="https://unpkg.com/normalize.css@7.0.0/normalize.css" />
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  `;
  res.setHeader('content-type', 'text/html');
  res.setHeader('content-length', body.length);
  res.end(body);
}).listen(3000);
