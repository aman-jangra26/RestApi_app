const express = require('express');
const app = express();
const PORT = 3001;

app.get('/',
    (req, res) => {
        res.send("Get Request Called")
    })

app.listen(PORT,
    function (err) {
        if (err) console.log(err);
        console.log("Server listening on PORT", PORT);
    });