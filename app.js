const express = require("express");
const serveIndex = require("serve-index");
const app = express();

app.use(
  "/ftp",
  express.static(__dirname + '/public/ftp'),
  serveIndex(__dirname + '/public/ftp', { icons: true })
);

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
