import express from 'express'

const app = express()


app.get('/', (req,res)=>{
res.send('Hello world')
})
app.listen(3232,()=>{
    console.log('Server started on this port')
})