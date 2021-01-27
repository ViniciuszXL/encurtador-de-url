const mongoose = require('mongoose');
const shortId = require('shortid');

const model = new mongoose.Schema({
    url: { type: String, require: true },
    redirectUrl: { type: String, require: true, default: shortId.generate },
    redirects: { type: Number, default: 0 }
});

module.exports = mongoose.model('shorter_urls', model);