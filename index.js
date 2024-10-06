const express=require("express")
const path=require("path")
const app=express()
const PORT=3000
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))


app.listen(PORT,()=>console.log(`Listing port on ${PORT}`))