var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
  axios
    .get('https://api.themoviedb.org/3/movie/now_playing?api_key=1015f2a2c42b03d2d4a7e917f6f104d7&language=en-US&page=1')
    .then((result) => {
      // console.log(Array.isArray(results.data));
      let movies = result.data.results;
      return res.render('index', { myData: movies });
    });
});

module.exports = router;
