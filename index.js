const server = require("./server/index");
const PORT = 5000;

server.listen(PORT, () =>
  console.log(`The server is on http://localhost${PORT}`)
);
