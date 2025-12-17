import express from "express";
import { ferrariWins } from "../data.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    const response = {
        info: {
            totalWins: ferrariWins.length,
            leclerWins: driverTotalWin("Leclerc"),
            sainzWins: driverTotalWin("Sainz"),
        },
        results: ferrariWins,
    }

    res.json(response);
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

function driverTotalWin(name) {
    let count = 0;
    ferrariWins.forEach(win => {
        win.tags.forEach(tag => {
            if (tag === name) {
                count++;
            }
        })
    })
    return count;
}


export default router;