const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const consume = require("./consumers/offersConsumer");

const PORT = process.env.PORT || 3002;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

consume();

app.use("/api/offers", require("./routes/offersRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Customer running on http://localhost:${PORT}`);
});
