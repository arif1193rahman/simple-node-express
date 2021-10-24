const express = require('express');
const cors= require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('hello from node, i am excited with nodemon');
});

const users=[
    {id: 12, name:"Sabnur", email:"subnur@gmail.com", phone:"0173423234"},
    {id: 22, name:"Shrabonti", email:"subnur1@gmail.com", phone:"0173423234"},
    {id: 32, name:"Surma", email:"subnur2@gmail.com", phone:"0173423234"},
    {id: 42, name:"komla", email:"subnur3@gmail.com", phone:"0173423234"},
]


app.get('/users',(req, res)=>{
    const search= req.query.search;
    // use search quarry paramiter
    if(search){
const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
res.send(searchResult);
    }
    else{
        res.send(users)
    }
});

// app method
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    res.json(newUser)
})

// dynamic API
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
res.send(user); 
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'apple', 'banana'])
})

app.get('/fruits/massage/fazli', (req, res)=>{
    res.send('tok took')
})

app.listen(port, ()=>{
    console.log('listening to node', port)
})

