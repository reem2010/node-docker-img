import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("<h1>Welcome to node app</h1>"));

app.listen(8080, () => console.log("listening on port 8080"));
