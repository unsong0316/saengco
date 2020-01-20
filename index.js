const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const _webPort = 80;
global.app = express();
app.use(cors());
global.router = express.Router();
global.path = __dirname;
app.use(bodyParser.json());
app.use("/", router);

router.get("/", (req, res) => {
    console.log(path);
    res.sendFile(`${path}/web-client/ex_html2.html`);
});

router.get("/app.js", (req, res) => {
    res.sendFile(`${path}/web-client/app.js`);
});
app.listen(_webPort, () => {
    console.log(`web server running on ${_webPort}`);
});