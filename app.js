// IMPORTIAMO EXPRESS
const express = require('express');

// INIZIALIZZIAMO EXPRESS NELLA VARIABILE app
const app = express();

// DEFINIAMO LA PORTA 
const port = 3000;

// DEFINISCO GLI ASSET STATICI
app.use(express.static('public'));

// DEFINIAMO LA ROTTA BASE
app.get('/',(req,res) =>{
    res.send('Server del mio blog');
   })

app.get('/bacheca',(req,res) =>{
    const posts = [
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

    // INVIO L'ARRAY DEI POST QUANDO VIENE EFFETTUATA LA CHIAMATA BACHECA
    res.json(posts);
    
})

// DICIAMO AL SERVER DI RIMANERE IN ASCOLTO SULLA PORTA 3000
app.listen(port, () =>{
    console.log(`Server in ascolto sulla porta ${port}`);
})

