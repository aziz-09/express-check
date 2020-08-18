
express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res ){
    res.render('content', {
        home : true
    });
})

app.get('/services', function(req, res) {
    res.render('services', {
      services : true
    });
  });

  app.get('/contact', function(req, res) {
    res.render('contact', {
      contact : true
    });
  });


app.listen(port, function(){
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });
