import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.json({
    msg: "Hello from the server2 - deployed successfully hurrah!!",
  });
});

app.listen(PORT, () => console.log(`App is up and running on ${PORT}`));
