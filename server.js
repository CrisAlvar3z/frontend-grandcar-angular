const compression = require('compression');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Gzip
app.use(compression());

// Run the app by serving the static files in the dist directory
<<<<<<< HEAD
app.use(express.static(__dirname + '/dist/frontend-grandcar-angular'));
=======
app.use(express.static(__dirname + '/dist/frontend-tienda-angular'));
>>>>>>> e825370a9d3010e0d8d38508522a6f3760fabf50

// Start the app by listening on the default Heroku port
app.listen(port);

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname + '/dist/frontend-grandcar-angular/index.html'));
});

console.log(`Server listening on ${port}`);
=======
  res.sendFile(path.join(__dirname + '/dist/frontend-tienda-angular/index.html'));
});

console.log(`Server listening on ${port}`);
>>>>>>> e825370a9d3010e0d8d38508522a6f3760fabf50
