const express = require("express")
const cors = require('cors')
require('dotenv').config()








const app = express()
const PORT = process.env.PORT || 4000








app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})