var theme10 = require('./themes/theme10');

function start() {
    console.log("Request handler 'start' was called.");
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

function theme() {
    console.log("Request handler 'theme10' was called.");
    var test = theme10.fibonacci(10);
    return test;
}

exports.start = start;
exports.upload = upload;
exports.theme = theme;