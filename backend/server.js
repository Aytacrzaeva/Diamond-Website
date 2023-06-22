const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
app.use(cors())


app.listen(8080, () => {
    console.log("server running")
})