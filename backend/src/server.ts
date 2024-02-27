import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { PORT } from "@/lib/constants";

const app = express();

app.set("port", PORT);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/healthcheck", (_, res) => {
  res.status(200).send({
    ok: true,
  });
});

const main = async (): Promise<any> => {
  try {
    app.listen(app.get("port"), () =>
      console.log(`Server listening on port ${app.get("port")}`)
    );
  } catch (err) {
    console.error(err);
  }
};

main();

export default app;
