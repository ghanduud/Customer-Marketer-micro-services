const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/offers", require("./routes/offersRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Marketer running on http://localhost:${PORT}`);
});
