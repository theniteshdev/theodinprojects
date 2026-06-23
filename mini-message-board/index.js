import express from "express";

const app = express();
app.use(express.json());

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.send(messages);
});

app.post("/new", (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "please enter new message!",
    });
  }

  messages.push({
    ...req.body,
    added: new Date(),
  });
  
  res.send({
    message: "message posted",
    messages,
  });
});

app.listen(8080, "localhost", (err) => {
  if (err) {
    console.log("Something went wrong!");
    process.exit(1);
  }
  console.log("Server binded at port 8080.");
});
