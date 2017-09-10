var express        = require('express');
var router         = express.Router();



router.get(['/'], renderHomePage);


function renderHomePage(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
}



module.exports = router;
