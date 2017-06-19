var mysql = require('mysql');
var connection = mysql.createPool({
    // host: 'localhost',
    // user: 'root',
    //password: '',
    //database: 'book_store'
    host: 'viral123.db.9462939.hostedresource.com',
    user: 'viral123',
    password: 'Viral@1212',
    database: 'viral123'
});

module.exports = connection;