const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const cron = require("node-cron");
const generateName = require("./src/controllers/generateName.js");

/* se ejecuta cada 1 hora **/

cron.schedule(
  "0 * * * *",
  async () => {
    await generateName();
  },
  {
    scheduled: true,
    timezone: "America/Buenos_Aires",
  }
);

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("Listening at 3001");
  });
});
