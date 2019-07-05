const controller = require('../../controllers/welcome.controller');

module.exports = async (req, res) => {
    controller.get(req, res);
};
