const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const routerUrls = require("./Routes/routes")
const app = express();

const PORT = process.env.PORT || 5000;
__dirname = path.resolve()

dotenv.config({path: path.resolve(__dirname, "../.env")})

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("DB CONNECTED")
})


 
app.use(express.json());
app.use(cors())
app.use("/auth", routerUrls);

app.get('/', (req, res) => {
    res.send("API RUNNING")
})



app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`))