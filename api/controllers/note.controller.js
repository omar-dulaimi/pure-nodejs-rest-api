const Note = require('../models/note.model');
const querystring = require('querystring');
const url = require('url');

exports.get = async (req, res) => {
    const notes = await Note.find({ isDeleted: { $ne: true } });
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': true,
    });

    res.end(JSON.stringify(notes));
};

exports.post = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': true,
    });
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', async () => {
        try {
            const parsedBody = Buffer.concat(body).toString();
            const parsedNote = JSON.parse(parsedBody);
            const note = await Note.create({
                title: parsedNote.title,
                content: parsedNote.content,
            });
            res.end(JSON.stringify(note));
        } catch (e) {
            res.end(JSON.stringify(e));
        }
    });
};

exports.put = (req, res) => {
    res.writeHead(201, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': true,
    });

    const body = [];
    const parsed = url.parse(req.url);
    const query = querystring.parse(parsed.query); // You get the param Id here if you want to

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', async () => {
        try {
            const parsedBody = Buffer.concat(body).toString();
            const parsedNote = JSON.parse(parsedBody);
            const updatedNote = await Note.findById(parsedNote._id);
            updatedNote.title = parsedNote.title;
            updatedNote.content = parsedNote.content;
            await updatedNote.save();

            res.end(JSON.stringify(updatedNote));
        } catch (e) {
            res.end(JSON.stringify(e));
        }
    });
};

exports.delete = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': true,
    });

    const parsed = url.parse(req.url);
    const query = querystring.parse(parsed.query);

    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', async () => {
        try {
            const parsedBody = Buffer.concat(body).toString();
            const parsedNote = JSON.parse(parsedBody);
            const updatedNote = await Note.findById(parsedNote._id);
            updatedNote.isDeleted = true;
            await updatedNote.save();
            res.end(JSON.stringify(updatedNote));
        } catch (e) {
            res.end(JSON.stringify(e));
        }
    });
};
