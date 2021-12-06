const express = require('express');

const app = express();

app.get('/',(request, response) => {
    return response.json({
        evento: 'Integração Alexandria',
        Estágiario: 'Willian Cesar dos Santos'
    })
});

app.listen(3333);