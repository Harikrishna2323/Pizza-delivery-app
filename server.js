const express = require("express");
const db = require("./db");
const app = express();
const path = require("path");

const pizzaRouter = require("./routes/pizza");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
app.use(express.json());

app.use("/api/pizzas", pizzaRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => console.log("Server started on port: " + PORT));
