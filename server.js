const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/keys");
const ejs = require("ejs");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");


const app = express();

// Dependencies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieSession({
		name: "topicTalk",
		keys: ['key1', 'key2']
	})
);

app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig");

app.use(cors());
app.set('view engine', 'ejs');

// Headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization',
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
	next();
});

// Routes
app.use(require("./config/startup"));

port = process.env.NODE_ENV || 8000;

app.listen(port, () => {
	console.log("Application listenting on port " + port);
});
