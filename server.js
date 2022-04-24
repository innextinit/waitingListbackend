require("dotenv").config({ path: "./.env" });
const { createServer } = require("http");
const app = require("./index");

const server = createServer(app);

const { LOCAL_PORT, PORT } = process.env;

const port = PORT || LOCAL_PORT;
server.listen(port, () => {
  console.log(
    `server running on port *::${port}`
  );
});
