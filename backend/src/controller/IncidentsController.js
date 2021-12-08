const connection = require('../database/connection');
const { create } = require('./OngController');

module.exports = {
    async create(request, response) {
        const { title, descreption, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            descreption,
            value,
            ong_id,
        })

        return response.json({ id });
    }
}