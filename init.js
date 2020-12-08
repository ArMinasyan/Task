const axios = require('axios').default;

const users = require('./models/Model.User')();
const photos = require('./models/Model.Photos')();
const albums = require('./models/Model.Albums')();

module.exports = () => {
    users.findAll().then(res => {
        if (res.length == 0)
            axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                users.bulkCreate(response.data).then(insertedData => {
                    if (insertedData) console.log('Users inserted...')
                })
            })
    })

    photos.findAll().then(res => {
        if (res.length == 0)
            axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {
                photos.bulkCreate(response.data).then(insertedData => {
                    if (insertedData) console.log('Photos inserted...')
                })
            })
    })

    albums.findAll().then(res => {
        if (res.length == 0)
            axios.get('https://jsonplaceholder.typicode.com/albums').then(response => {
                albums.bulkCreate(response.data).then(insertedData => {
                    if (insertedData) console.log('Albums inserted...')
                })
            })
    })
}