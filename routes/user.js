var exp = require('express');
var router = exp.Router();
var Book = require('../models/book');

router.get('/', function(req, res, next) {
    Book.getallUser(function(row, error) {
        if (error) {
            res.json(error);
        } else {
            res.json(row);
        }
    });
});
router.delete('/', function(req, res, next) {
    Book.DeleteUser(req.body, function(row, error) {
        if (error) {
            res.json(error);
        } else {

            res.json(row);
        }
    });
});
router.post('/:id?', function(req, res, next) {
    if (!req.params.id) {
        Book.insertUser(req.body, function(row, error) {
            if (error) {
                res.json(error);
            } else {

                res.json(row);
            }
        });
    } else {
        Book.login(req.body, function(row, error) {
            if (error) {
                res.json(error);
            } else {

                res.json(row);
            }
        });
    }
});
router.put('/:id', function(req, res, next) {
    Book.updateUser(id, req.body, function(row, error) {
        if (error) {
            res.json(error);
        } else {

            res.json(row);
        }
    });
});
module.exports = router;