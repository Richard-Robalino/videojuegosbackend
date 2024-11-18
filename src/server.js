import express from "express";
import router from "./routers/videojuego_routes.js";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});
app.use("/api", router);

export default app;
