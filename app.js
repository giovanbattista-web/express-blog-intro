const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',(req,res) =>{
    res.send('Server del mio blog');
   })

app.get('/bacheca',(req,res) =>{
    const people = [
        {
        title : 'Ciambellone',
        content : 'Il classico ciambellone con yogurt',
        image : 'imgs/bacheca/ciambellone1.jpeg', 
        tags : ["javascript", "node", "blog"]
        },
       {
        title : 'Cracker barbabietola',
        content : 'Il classico salatino con barbabietola',
        image : 'imgs/bacheca/cracker_barbabietola1.jpeg', 
        tags : ["javascript", "node", "blog"]
       },
       {
        title : 'Pane fritto dolce',
        content : 'Il pane sia dolce ma anche fritto',
        image : 'imgs/bacheca/pane_fritto_dolce1.jpeg', 
        tags : ["javascript", "node", "blog"]
       },
       {
        title : 'Pasta barbabietola',
        content : 'la pasta con la barbabietola',
        image : 'imgs/bacheca/pasta_barbabietola1.jpeg', 
        tags : ["javascript", "node", "blog"]
       },
       {
        title : 'Torta paesana',
        content : 'la torta di paese',
        image : 'imgs/bacheca/torta_paesana1.jpeg', 
        tags : ["javascript", "node", "blog"]
       },
    ]
    res.json(people);
    
})

app.listen(port,() =>{
    console.log(`Server in ascolto sulla porta ${port}`);
})

