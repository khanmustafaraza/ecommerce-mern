const express  = require('express');



const app = express();
app.get("/",(req,res)=>{
    res.status(200).send(`<h1>This is the class viii surya </h1>`)
})

const PORT =3000;
app.listen(PORT ,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})