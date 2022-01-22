import { UrlController } from './controller/urlController';
import express from 'express';
import { MongoConnection } from './database/mongoConnection';

const app = express();

app.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new UrlController();

app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.listen(3000, () => {
    console.log('Application listening on the port 3000');
});