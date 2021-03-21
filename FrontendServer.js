const express = require("express");
const app = express();
app.use(express.static('dist'));
//app.use('/*', express.static('dist'));
app.listen(3335, function () {
    console.log('Listen at 3333 ...');
});