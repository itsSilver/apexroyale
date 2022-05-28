import { Express, } from "express";
const Post = require("./Post");
const User = require("./User");

export default function routes(app: Express) {

  app.get("/", (req, res) => {
    res.send("Express + TypeScript Server from routes");
  });
  app.use("/posts", Post);
  app.use("/auth", User);
}