import express from 'express';

const app= express();

app.get("/products",(req,res) =>{
    res.send("Server is ready");
})

app.listen(5000, () => {
    console.log('server started at https://localhost:5000')

})
