var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dogs', function(req, res, next){
  res.send('Woof I am a dog')
})


router.get('/cat', function(req, res, next){
  res.send("I'm actually an Emu")
})
module.exports = router;
