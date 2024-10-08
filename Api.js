const express = require('express');
const path = require('path');
const app = express();
const bodyP = require('body-parser');
const compiler = require('compilex');
const options = { stats: true };
compiler.init(options);
app.use(bodyP.json());
app.use("/codemirror-codemirror5-b9dd976", express.static("C:/Users/HP/Desktop/FinalTry/codemirror-codemirror5-b9dd976"));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function (req, res) {
    compiler.flush(function () {
        console.log("All temporary files are flushed !!")
    });
    res.sendFile("C:/Users/HP/Desktop/FinalTry/index.html")
})
app.post("/compile", function (req, res) {
    //if windows  
    var code = req.body.code;
    var input = req.body.input;
    var lang = req.body.lang;
    try {
        if (lang == "C++") {
            if (!input) {

                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "Error" });
                    };
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "Error" });
                    };
                });
            }
        }
        else if (lang == "Java") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compileJava(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "Error" });
                    };
                });
            }
            else {
                var envData = { OS: "windows" };
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "Error" });
                    };
                });
            }
        }
        else if (lang == "Python") {
            {
                if (!input) {
                    var envData = { OS: "windows" };
                    compiler.compilePython(envData, code, function (data) {
                        if (data.output) {
                            res.send(data);
                        }
                        else {
                            res.send({ output: "Error" });
                        };
                    });
                }
                else {
                    var envData = { OS: "windows" };
                    compiler.compilePythonWithInput(envData, code, input, function (data) {
                        if (data.output) {
                            res.send(data);
                        }
                        else {
                            res.send({ output: "Error" });
                        };
                    });
                }
            }
        }
    }
    catch (err) {
        res.send({ output: "Error" });
    }

})
app.listen(8000)
