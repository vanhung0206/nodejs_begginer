const search = require("./search");
const news = require("./new");

function route(app) {
  app.use("/search", search);
  app.use("/news", news);

  //router to home
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.post("/", (req, res) => {
    res.render("home");
  });
}

module.exports = route;
