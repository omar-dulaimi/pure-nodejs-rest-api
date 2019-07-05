exports.get = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
        `<h1><strong><span style='color: #008080;'>Welcome to our pure NodeJS API</strong></span></h1>
        <span><span style='color: #008000;'>Please use <span style='text-decoration: underline;'><em><strong>/note</strong></em></span> to do your development.</span></span>`,
    );
    res.end();
};
