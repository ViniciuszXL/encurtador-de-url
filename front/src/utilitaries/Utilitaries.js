const axios = require('axios');
const url = 'http://localhost/api/';

export async function httpGet(method) {
    const query = await axios.get(url + method);
    return query;
}