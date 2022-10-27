const express = require('express');
const app = express();


app.get("/", async (req, res) => {
    res.send("Teste de Rota Softex!");
});

app.listen(8080, () => {
    console.log("Sevidor iniciado!! http://localhost:8080");
});