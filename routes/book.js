var exp = require('express');
var router = exp.Router();
var Book = require('../models/book');

router.get('/', function(req, res, next) {


    Book.getallbooks(function(row, error) {
        if (error) {
            res.json(error);
        } else {
            res.json(row);
        }
    });




});
router.delete('/', function(req, res, next) {
    Book.delete(req.body, function(row, error) {
        if (error) {
            res.json(error);
        } else {

            res.json(row);
        }
    });

});
router.post('/:id?', function(req, res, next) {
    if (!req.params.id) {
        Book.insert(req.body, function(row, error) {
            if (error) {
                // console.log(error);
                res.json(error);
            } else {
                //console.log(req.body);
                Book.insert1(req.body, function(row, error) {
                    if (error) {
                        // console.log(error);
                        res.json(error);
                    } else {
                        res.json(row);
                    }
                });
            }
        });
        // res.json({ 'id': 1 });
    } else {
        if (req.params.id == 1) {

            Book.getallbooksbyname(req.body, function(row, error) {
                if (error) {
                    res.json(error);
                } else {
                    res.json(row);
                }
            });
        }
        if (req.params.id == 2) {

            Book.getallbooksbyauther(req.body, function(row, error) {
                if (error) {
                    res.json(error);
                } else {
                    res.json(row);
                }
            });
        }
        if (req.params.id == 3) {

            Book.getallbooksbyisbn(req.body, function(row, error) {
                if (error) {
                    res.json(error);
                } else {
                    res.json(row);
                }
            });
        }
        if (req.params.id == 4) {

            Book.updatePrice(req.body, function(row, error) {
                if (error) {
                    res.json(error);
                } else {
                    res.json(row);
                }
            });
        }
        if (req.params.id == 5) {

            Book.updatebookDetails(req.body, function(row, error) {
                if (error) {
                    res.json(error);
                } else {
                    res.json(row);
                }
            });
        }
    }
});
module.exports = router;