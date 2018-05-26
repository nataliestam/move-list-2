const express = require('express');
const app = express();

let movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

app.use(express.static('./client/dist'));

app.listen(3000, () => console.log('listening on port 3000!'));