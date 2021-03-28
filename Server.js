const express = require("express");
const cors = require("cors");

const app = express();

const usersMap = new Map([
    ["vlad", "vlad1"],
    ["rita", "rita1"],
]);

app.use(cors());
app.use(express.json());


app.get("/users", (req, resp)=> {
 resp.send("Ok");
});

app.post("/users", (req, resp)=> {
    let result;
    console.log(req.body);
    usersMap.forEach((value, key, map)=>{
       console.log('user.key ' + key);
       console.log('user.value ' + value);
    if(key === req.body.name && value === req.body.password){
        result = {key, value};
    }
    });
    result ? resp.send(result) : resp.status(400).send({
        message: 'Wrong credentials'
    });
});

app.listen(9093, (error) => {
    if(error) {
        console.log("Sever error");
    }

    console.log("server started at 9093");
});