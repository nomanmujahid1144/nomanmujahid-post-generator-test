const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());



// Getting the Routes
const blog = require("./routes/blog");

// Mount routers
app.use("/api/v1/blog", blog);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
