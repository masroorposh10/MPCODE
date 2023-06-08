// import { userData } from './Data';
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors());

const userData = [{
    Code : ""
}]



app.get("/",(req,res)=>{
    console.log(userData[0].Code)
    res.json(userData[0])
})

app.post("/add/new",(req,res) =>{
    // userData[0].Code = "";
    const { text } = req.body;
    console.log('Received text:', text);
    userData[0].Code = text;

  // Handle the received text (e.g., save it to a database, perform operations, etc.)
  // ...

  res.json({ message: 'Text received successfully' });
})

app.listen(8000)