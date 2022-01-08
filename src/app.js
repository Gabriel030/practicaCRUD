const express = require("express")
const app = express()
const path = require("path")
const method = require("method-override")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname,"views"))
app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), ()=> console.log("servidor funcionando en puerto" + app.get("port")));

app.use(express.static(path.resolve(__dirname,"../public")))



app.use(require("./routes/users"))




