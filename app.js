const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())
// change made

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    return res.send(results)
    // let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    // return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});


app.listen(3000, function() {
  console.log(`app on port 3000`)
});
