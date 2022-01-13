import express from "express";
import cors from "cors";
import morgan from "morgan";
import send_sms from "./send_sms";

require("dotenv").config();

let { PORT } = process.env;

const app = express();

// --------------- Defining application
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --------------- Defining custom routes
app.get("/", (req, res) => {
  console.log("running");
  res.send("NAC SMS Trigger APP running");
});
app.post("/send_sms", async (req, res) => {
  try {
    res.status(200).send(await send_sms(req.body));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// ---------------- Start application
app.listen(PORT, () =>
  console.log(`SMS Trigger API running in ${process.env.PORT}!`)
);
