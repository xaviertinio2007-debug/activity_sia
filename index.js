const express = require ('express');

const server = express();
const PORT = 2107
const HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME, '0.0.0.0', () => {
    console.log('server is running: ${HOSTNAME}:${PORT}')
})

let data = {
    {
        id: 1,
        name: 'Dog',
    },
    {
        id: 2,
        name: 'Dog nga itom',
    },
    {
        id: 3,
        name: 'Dog nga puti',
    },
}