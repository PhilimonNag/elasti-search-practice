const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`
    <div style="background-color: #77dd77; display: flex; justify-content: center; align-items: center; height: 100vh;">
  <div style="background-color: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); padding: 20px;border-radius: 10px;">
  <h1>Jesus does not bring me this far to leave</h1>
  <h1>what he has started he is going to finish it.</h1>
  </div>
</div>

    `)
})

app.listen(PORT,()=>{console.log(`Jesus is with me at ${PORT}.http://localhost:${PORT}`)})