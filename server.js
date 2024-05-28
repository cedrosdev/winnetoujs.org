const express = require("express");
const { createServer } = require("http");
const app = express();
app.use(express.static(__dirname + "/Public"));
app.set("views", __dirname + "/Views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const httpServer = createServer(app);
httpServer.listen(3020);
console.log(".");
console.log("Winnetoujs.org running on 3020");

app.get("/", (req, res) => {
  res.render("home/home");
});

app.get("/docs/:route", (req, res) => {
  res.render(`template/template`, { path: req.params.route });
});
