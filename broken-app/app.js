const express = require('express');
let axios = require('axios');
const app = express();

// added for testing
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// app.post('/', (req, res, next) => {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch(err) {
//     next(err);
//   }
// });

app.post('/', async (req, res, next) => {
  try {
    let results = await Promise.all(req.body.developers.map(async d => {
      try {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return response.data;
      } catch (err) {
        console.error(`Failed to fetch data for ${d}`, err);
        return null;
      }
    }));

    let out = results
      .filter(result => result !== null)
      .map(r => ({ name: r.name, bio: r.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});



app.get('/hello', (req, res, next) => {
 
    res.send("hello world!")
    });



app.listen(3000, () => {
  console.log("App on port 3000")
})