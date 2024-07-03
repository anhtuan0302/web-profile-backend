var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");

var accountRouter = require("./routes/account");
var educationRouter = require("./routes/education");
var experienceRouter = require("./routes/experience");
var infoRouter = require("./routes/info");
var projectRouter = require("./routes/project");

var app = express();

// Connect to MongoDB
var uri =
  "mongodb+srv://tuannagch210275:Anhtuan0302@cluster.jqgjk0h.mongodb.net/Profile";
mongoose.set("strictQuery", true);
mongoose
  .connect(uri)
  .then(() => console.log("Connect to DB successful"))
  .catch((err) => console.error("Connect to DB error"));

// Config CORS
app.use(cors());

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/account", accountRouter);
app.use("/api/education", educationRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/info", infoRouter);
app.use("/api/project", projectRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 5555, () => {
  console.log(`Server is running on port 5555`);
});

module.exports = app;
