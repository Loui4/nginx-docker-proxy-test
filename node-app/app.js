const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("proxy request working"));

app.listen(433, () => {
  console.log("running on port 433");
});
