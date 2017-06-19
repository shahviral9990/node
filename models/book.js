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
        //    console.log(Book);
        var any = db.query('INSERT INTO `b_a_p_t`(`book_isbn`, `auther_id`) VALUES (?,?)', [Book.isbn, Book.autherid], callback);
        if (any.affectedRows != 0) {
            return db.query(' INSERT INTO `book`(`book_isbn`, `book_name`, `mrp`, `price`, `book_status`, `cover_photo`, `book_photo1`, `book_photo2`, `fk_type_id`)  VALUES (?, ?, ?, ?, ?,?,?,?,?);', [Book.isbn, Book.name, Book.price, Book.mrp, Book.status, Book.cover, Book.photo1, Book.photo2, Book.typeid], callback);
        } else
            return {
                "fieldCount": 0,
                "affectedRows": 0,
                "insertId": 0,
                "serverStatus": 2,
                "warningCount": 0,
                "message": "",
                "protocol41": true,
                "changedRows": 0
            };
        //        return db.query('INSERT INTO `b_a_p_t`(`book_isbn`, `auther_id`) VALUES (?,?); INSERT INTO `book`(`book_isbn`, `book_name`, `mrp`, `price`, `book_status`, `cover_photo`, `book_photo1`, `book_photo2`, `fk_type_id`)  VALUES (?, ?, ?, ?, ?,?,?,?,?);', [Book.isbn, Book.autherid, Book.isbn, Book.name, Book.price, Book.mrp, Book.status, Book.cover, Book.photo1, Book.photo2, Book.typeid], callback);

    },
    updatePrice: function(Book, callback) {
        return db.query('update book set price=? where book_isbn=?', [Book.price, Book.isbn], callback);

    },
    updatebookDetails: function(Book, callback) {
        return db.query('UPDATE book SET book_name=?,mrp=?,price=?,book_status=?,cover_photo=?,book_photo1=?,book_photo2=?,fk_type_id=? WHERE book_isbn=?;', [Book.name, Book.price, Book.mrp, Book.status, Book.cover, Book.photo1, Book.photo2, Book.typeid, Book.isbn], callback);
    },
    updateCustom: function(Book, callback) {
        return db.query(Book.query, Book.array, callback);

    },
    insertUser: function(User, callback) {
        return db.query('INSERT INTO user ( `user_name`, `contact`, `email`, `full_name`, `address`, `password`)  VALUES (?,?,?,?,?,?)', [User.user_name, User.contact, User.email, User.full_name, User.address, User.password], callback);

    },
    login: function(User, callback) {
        return db.query('select count(*) from user where email=? and password=?', [User.email, User.password], callback);

    },
    updateUser: function(id, User, callback) {
        return db.query('UPDATE user SET user_name=?,contact=?,email=?,full_name=?,address=?,password=? WHERE user_id=?', [User.user_name, User.contact, User.email, User.full_name, User.password, User.password, id], callback);

    },
    DeleteUser: function(User, callback) {
        return db.query('DELETE FROM user WHERE User.id=?', [User.id], callback);

    },
    getallUser: function(callback) {
        return db.query('select * from user', callback);
    }

};

module.exports = book;