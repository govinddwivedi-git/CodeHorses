const express = require('express');
const app = express();
const bodyP = require('body-parser');
app.use(bodyP.json());
app.use("/codemirror-codemirror5-b9dd976",express.static("C:/Users/HP/Desktop/FinalTry/codemirror-codemirror5-b9dd976"));
app.use("/", function (req, res) {
    res.sendFile("C:/Users/HP/Desktop/FinalTry/index.html")
})

app.listen(8000)
