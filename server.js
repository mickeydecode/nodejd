const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("here");
    res.sendStatusCode(200).json({message: "error"}).send("hi");
    res.download('server.js');
    res.render("index",{text:"world"})
})
 app.listen(1000);
