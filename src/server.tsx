import React from 'react';
import ReactDOMServer from "react-dom/server";
import express from 'express';

import { Takurinton } from './Takurinton';

const html = (component: string) => `
<html>
  <head>
  </head>
  <body>
    <div id="takurinton">
      ${component}
    </div>
    <script async defer src="index.js"></script>
  </body>
</html>
`;

const app = express();

app.use(express.static('dist'));
app.get("/", (_, res: any) => {
  res.send(html(ReactDOMServer.renderToString(<Takurinton />)));
});

app.listen(3000, () => {
  console.log("listening: http://localhost:3000 ...",);
});