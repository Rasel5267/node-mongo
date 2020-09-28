const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

//get
app.get('/', (req, res) =>{
    res.send('node project');
  })
app.get('/fruits/banana', (req, res) =>{
  res.send({fruits:'banana', quantity:'1000', price:'10000'});
})

const users = ['Rasel', 'Rashed', 'Milu', 'Hiru', 'Masum'];

app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  const name = users[id];
  res.send({id ,name});
})

//post 
app.post('/addUser', (req, res) =>{
  // save to database
  const user =req.body;
  user.id = 55;
  res.send(user);
})

app.listen(3000, () => console.log('listening on port 3000'));