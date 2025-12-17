import express, { Router } from "express";
import postsRouter from "./routers/posts.js"

const app = express();
const port = 4416;

app.use(express.static("public"));
app.use("/posts", postsRouter)

// app.get("/", (req, res) => {
//     res.json(ferrariWins);
// })


app.listen(port, () => {
    console.log(`Il server è pronto a bootstrappare sulla porta ${port} :)`)
})