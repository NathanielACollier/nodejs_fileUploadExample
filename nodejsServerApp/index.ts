import express = require('express');
import { generalController } from './controllers/general';

let port = 8080;
const app: express.Application = express();

app.use(express.static("www"));

app.use(express.json()); // this is so posts will be able to do req.body.var1, req.body.var2

app.use('/general', generalController);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
