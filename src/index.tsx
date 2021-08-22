import React from 'react';
import ReactDOMServer from "react-dom/server";
import express from 'express';

const App = () => <h1>hello takurinton</h1>

const app = express();
app.get("/", (_, res: any) => {
  res.send(ReactDOMServer.renderToString(<App />));
});

app.listen(3000, () => {
  console.log("listening: http://localhost:3000 ...",);
});