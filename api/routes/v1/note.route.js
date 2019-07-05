const controller = require('../../controllers/note.controller');

module.exports = async (req, res, method) => {
    switch (method) {
        case 'GET':
            controller.get(req, res);
            break;

        case 'POST':
            controller.post(req, res);

            break;

        case 'PUT':
            controller.put(req, res);

            break;

        case 'DELETE':
            controller.delete(req, res);
            break;
    }
};
