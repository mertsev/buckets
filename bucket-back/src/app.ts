import express, { Application } from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

routes.bucketRouter({ app });
