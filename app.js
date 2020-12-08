const express = require('express');
const body_parser = require('body-parser')

const app = express();

const db = require('./db');

async function init() {
    await users.sync({ force: false });
    await albums.sync({ force: false });
    await photos.sync({ force: false });
}
///Database Connection

db.authenticate().then(ok => {
    console.log('Database connected...')
}).catch(err => {
    console.log(err)
})

const users = require('./models/Model.User')();
const photos = require('./models/Model.Photos')();
const albums = require('./models/Model.Albums')();


init();

//

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));


///

app.listen(8000, () => {
    console.log('localhost:8000')
})