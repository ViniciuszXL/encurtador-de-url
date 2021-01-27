const express = require('express');
const model = require('../models/ShortModel');

// URL //
const url_redirector = 'http://localhost/api/';

// Route //
const route = express.Router();

// Get Urls //
route.get('/get', async (req, res) => {
    const query = await model.find();
    const response = [];
    var totalRedirects = 0;

    for (var i in query) {
        const data = query[i];
        const url = data['url'];
        const redirectUrl = url_redirector + data['redirectUrl'];
        const redirects = data['redirects'];

        totalRedirects += redirects;
        response.push({ url: url, redirectUrl: redirectUrl, redirects: redirects });
    }

    return res.json({ success: true, totalRedirects: totalRedirects, total: response.length, response: response });
});

// Rank //
route.get('/rank', async (req, res) => {
    var query = await model.find();
    query = query.sort(function (A, B) {
        if (A === B) return 0;
        if (A > B) return -1;
        return 1;
    });

    const response = [];
    for (var i in query) {
        if (response.length > 4) break;
        const data = query[i];
        const url = data['url'];
        const redirectUrl = url_redirector + data['redirectUrl'];
        const redirects = data['redirects'];
        response.push({ url: url, redirectUrl: redirectUrl, redirects: redirects });
    }

    return res.json({ success: true, response: response });
});

// Create Url //
route.get('/create', async (req, res) => {
    const url = req.query.url;
    if (url == '' || url == undefined) {
        return res.json({ sucess: false, message: 'Insira uma URL para ser encurtada' });
    }

    const query = await model.findOne({ url: url });
    if (query != null) {
        return res.json({ success: true, response: { url: query['url'], redirectUrl: url_redirector + query['redirectUrl'] }})
    }

    await model.create({ url: url });
    const get = await model.findOne({ url: url });
    if (get == null) {
        return res.json({ success: false, message: 'Não foi possível criar a url!' });
    }

    const redirectUrl = get['redirectUrl'];
    return res.json({ success: true, response: { url: get['url'], redirectUrl: url_redirector + redirectUrl }});
});

// Redirect Url //
route.get('/:redirectUrl', async (req, res) => {
    var redirectUrl = req.params.redirectUrl;
    const query = await model.findOne({ redirectUrl: redirectUrl });
    if (query == null) {
        return res.json({ success: false, message: 'URL origin not found' })
    }

    const url = query['url'];
    const redirects = query['redirects'] + 1;
    await model.updateOne({ url: url }, { redirects: redirects });
    return res.redirect(url);
});

module.exports = route;