var db = require('../db');
var book = {
    getallbooks: function(callback) {
        return db.query('select * from book', callback);
    },
    getallbooksbyname: function(data, callback) {
        return db.query('select * from book where book_name=?', [data.name], callback);
    },
    getallbooksbyisbn: function(data, callback) {
        return db.query('select * from book where book_isbn=?', [data.isbn], callback);
    },
    getallbooksbyauther: function(data, callback) {

        return db.query('select b.* from auther as a,book as b,b_a_p_t as p where a.auther_name=? and a.auther_id=p.auther_id and b.book_isbn=p.book_isbn', [data.auther], callback);
    },
    delete: function(data, callback) {
        return db.query('DELETE book, b_a_p_t FROM book, b_a_p_t WHERE b_a_p_t.book_isbn = book.book_isbn and book.book_isbn=? ', [data.isbn], callback);
    },

    insert: function(Book, callback) {
        return db.query('insert into book values(?,?,?)', [Book.name, Book.auther, Book.price], callback);

    },
    updatePrice: function(Book, callback) {
        return db.query('update book set price=? where bk_name=?', [Book.price, Book.name], callback);

    }

};

module.exports = book;