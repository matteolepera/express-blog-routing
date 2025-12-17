import express from "express";
import { ferrariWins } from "../data.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.send("Lista vittorie ferrari")
})
//SHOW
router.get("/:id", (req, res) => {
    res.send("Singola vittoria ferrari")
})
//STORE
router.post("/", (req, res) => {
    res.send("Aggiungi una vittoria ferrari")
})
//UPDATE
router.put("/:id", (req, res) => {
    res.send("Modifica una vittoria ferrari")
})
//MODIFY
router.patch("/:id", (req, res) => {
    res.send("Modifica dettagli di una vittoria ferrari")
})
//DESTROY
router.delete("/:id", (req, res) => {
    res.send("Elimina una vittoria ferrari")
})



export default router;