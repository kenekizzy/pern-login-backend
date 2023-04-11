const express = require("express")

const cors = require("cors")

require("dotenv").config()

const registerRoutes = require("./routes/registeration")

const app = express()

const PORT = process.env.PORT || 5000

//Middleware
app.use(express.json()) //  Gets the value from the req.body
app.use(cors()) //Allows for multiple access from different sites

//Routes
app.use("/auth", registerRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})