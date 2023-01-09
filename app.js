const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())
// change made

app.post('/',async function(req, res, next) {
  try {
    let results = []
    for (let name of req.body.developers) {
      let data = await axios.get(`https://api.github.com/users/${name}`);
      results.push(data.data)
    }
    
    let out = results.map(r => ({ name: r.name, bio: r.bio }));
    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});


app.listen(3000, function() {
  console.log(`app on port 3000`)
});

