// const express = require("express")
// const app = express()
// const cors = require("cors")
// app.use(cors())

// const PORT = 8080
// const MongooseConnect = "mongodb+srv://AytacRzayeva:Aytac123@cluster0.xz3ku7i.mongodb.net/"
// const mongoose = require("mongoose")
// app.use(express.json())

// const RobotsSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     desc: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     },
// })

// const Robots = mongoose.model("Robots", RobotsSchema)

// app.post("/robots", async (req, res) => {
//     const newRobots = new Robots({
//         ...req.body
//     })
//     await newRobots.save()
//     res.send(newRobots)
// })

// app.get("/robots", async (req, res) => {
//     const data = await Robots.find()
//     res.send(data)
// })

// app.get("/robots/:id", async (req, res) => {
//     const { id } = req.params
//     const target = await Robots.findById(id)
//     res.send(target)
// })

// app.delete("/robots/:id", async (req, res) => {
//     const { id } = req.params
//     await Robots.findByIdAndDelete(id)
//     res.send("item deleted")
// })

// mongoose.connect(MongooseConnect).then((res) => {
//     console.log("DB CONNECTED")
// })

// app.listen(PORT, () => {
//     console.log("app running")
// })

const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const PORT = 8080
const MongooseConnect = ""
const mongoose = require("mongoose")
app.use(express.json())

const RobotsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

const Robots = mongoose.model("Robots", RobotsSchema)

app.post("/robots", async (req, res) => {
    const newRobots = new Robots({
        ...req.body
    })
    await newRobots.save()
    res.send(newRobots)
})

app.get("/robots", async (req, res) => {
    const data = await Robots.find()
    res.send(data)
})

app.get("/robots/:id", async (req, res) => {
    const { id } = req.params
    const target= await Robots.findById(id)
    res.send(target)
})

app.delete("/robots/:id", async(req,res)=>{
    const {id}= req.params
    await Robots.findByIdAndDelete(id)
    res.send("item deleted")
})

mongoose.connect(MongooseConnect).then((res)=>{
    console.log("db connected")
})

app.listen(PORT, ()=>{
    console.log("app running")
})