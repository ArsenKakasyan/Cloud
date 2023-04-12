const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)

const start = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
        
        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e);
    }
}

start();
