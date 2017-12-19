<html>
  <link rel="stylesheet" href="https://unpkg.com/normalize.css@7.0.0/normalize.css" />
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <style>
    * {
      font-family: 'Lato'
    }
  </style>
  <body>
    <div id="root"></div>
    <script>
    (function (global, dom) {
      config = {
        endpoint: "http://${process.env.APP_HOST}:${process.env.APP_PORT}/api"
      };
      
      dom.addEventListener('DOMContentLoaded', function () {
        fetch(config.endpoint)
          .then(body => body.json())
          .then(data => {
            const elm = dom.createElement('span');
            elm.innerText = data.message;
            dom.querySelector('#root').appendChild(elm);
          });
      })
    })(window, document)
    </script>
  </body>
</html>
