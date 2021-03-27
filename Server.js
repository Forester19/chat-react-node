const express = require("express");
const cors = require("cors");

const app = express();

const users = [];

app.use(cors());

app.get("/users", (req, resp)=> {
 resp.send("Ok");
});

app.post("/users", (req, resp)=> {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    resp.ok();
});

app.listen(9093, (error) => {
    if(error) {
        console.log("Sever error");
    }

    console.log("server started at 9093");
});