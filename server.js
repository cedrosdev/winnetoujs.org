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
  res.render(`template/template`, { type: "docs", path: req.params.route });
});

app.get("/docs", (req, res) => {
  res.render(`template/template`, { type: "docs", path: "get-started" });
});

app.get("/api", (req, res) => {
  res.render(`template/template`, { type: "api", path: "api" });
});

app.get("/api/:route", (req, res) => {
  res.render("template/template", { type: "api", path: req.params.route });
});

app.get("/npm/version", async (req, res) => {
  let d = await fetch("https://registry.npmjs.org/winnetoujs");
  let data = await d.json();
  let version = data["dist-tags"].latest;
  res.json(version);
});
