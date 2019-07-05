exports.get = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(
        'Welcome to our pure NodeJS Api. Please use /note to do your development.',
    );
    res.end();
};
