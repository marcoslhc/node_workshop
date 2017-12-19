const { resolve } = require('path');
const { readFile } = require('fs');
const http = require('http');
const { APP_PORT = 3000 } = process.env;

function render(tpl, ctx, cb) {
  return readFile(resolve(__dirname, `./views/${tpl}`), function (err, data) {
    if (err) {
      console.log('there was an error');
      return;
    }

    return cb(eval("`" + data + "`"));
  });
}

function app() {
  return {
    listen: function (port, cb) {
      console.log(`App listening on port ${port}`);
      http.createServer(function (req, res) {
        const now = new Date();

        res.on('finish', () => console.log(`${now}: ${req.method} ${req.url} => ${res.statusCode}`));

        return cb(req, res);
      }).listen(port);
    }
  }
}

app().listen(APP_PORT, function (req, res) {
  render('index.tpl', {
    message: "Hello World!!!"
  }, function (body) {
    res.setHeader('content-type', 'text/html');
    res.setHeader('content-length', body.length);
    res.end(body);
  });
});
