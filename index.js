const express = require("express");
const listings = require("./routes/listings");
const appliedlistings = require("./routes/appliedlistings");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const expoPushTokens = require("./routes/expoPushTokens");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/listings", listings);
app.use("/api/appliedlistings", appliedlistings);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/expoPushTokens", expoPushTokens);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
