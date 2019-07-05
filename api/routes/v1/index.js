const noteRoutes = require('./note.route');
const welcomeRoutes = require('./welcome.route');

module.exports = async (req, res) => {
    const { url, method } = req;

    if (url.includes('/note')) {
        noteRoutes(req, res, method);
    } else {
        welcomeRoutes(req, res, method);
    }
};
