const express = require("express");

const app = express();

const users = [];

app.get("/users", (req, resp)=> {

});

app.post();

app.listen(9090, (error) => {
    if(error) {
        console.log("Sever error");
    }

    console.log("server started at 9090");
});