const express = require('express')


const app = express();

app.get('/', (req, res) =>{
    res.send('node project');
  })
app.get('/fruits/banana', (req, res) =>{
  res.send({fruits:'banana', quantity:'1000', price:'10000'});
})
app.listen(3000, () => console.log('listening on port 3000'));