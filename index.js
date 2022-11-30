

const express = require('express');
const Joi = require('@hapi/joi')
const app = express();
app.use(express.json());
// const bodyParser = require('body-parser');


// const jsonParser = bodyParser.json();

// I defined an array to have initial values.
var users = [
    {id: 1, name: "Ali Alavi", email: "ali@alavi.com", password: "123123123"},
    {id: 2, name: "Taghi taghavi", email: "taghi@taghavi.com", password: "789654123"},
    {id: 3, name: "Naghi Naghavi", email: "naghi@naghavi.com", password: "654123654"},
    {id: 4, name: "Hamid Hamidi", email: "hamid@hamidi.com", password: "987987789"},
    {id: 5, name: "Majid Majidi", email: "majid@majidi.com", password: "102030104050"}
]

const schema = Joi.object({
    id:Joi.number().required(),
    name:Joi.string().min(3).required(),
    email:Joi.string().min(4).required().email(),
    password:Joi.string().min(8).required()
});

userValidation = (req) => {
    return schema.validate(req.body);
}

// Routs:

app.get('/', (req, res) => {
    res.send("In the name of Allah");
});


// ///////////////////////////////////////////////////////////////////////////////////////////////////////
function userFind(sentId) {
    let user;
    for(let a of users) {
        if(a.id === sentId) {
            user = a;
        }
    }
    return user;
    // return arr.filter((u) => {u.id === parseInt(id)  ; console.log(parseInt(id) === u.id);})
}

app.get('/getUser/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const user = userFind(id);
    console.log(user);
    res.send(user);
});

app.post('/saveUser',/* jsonParser,*/ (req, res) => {
    
    let {error} = userValidation;
    if(error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    } else {
        users.push(req.body);
        return res.status(200).send(users);
    }
    
});

app.delete('/deleteUser/:id', (req, res) => {
    console.log(users);
    
    const sentId = parseInt(req.params.id);
    const user = userFind(sentId);
    users.splice(users.indexOf(user));
    console.log(users)
    return res.send(users);
});





///////////////////////////////////////////

function getUser(id) {
    return new Promise((resolve, reject) =>{
        
    });
}



app.listen(3000, () => console.log("The app is running on 3000."))

