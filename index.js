const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	console.log("Endpoint hit");
	res.status(200);
});

port = 8000;

app.listen(port, () => {
	console.log("listening on port " + port);
});
