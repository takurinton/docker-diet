import React from 'react';
import ReactDOMServer from "react-dom/server";
import express from 'express';

const app = express();
app.get("/", (req: any, res: any) => {
  res.send('<h1>hello world</h1>');
});

app.listen(3000, () => {
  console.log("listening: http://localhost:3000 ...",);
});