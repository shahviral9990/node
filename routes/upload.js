var exp = require('express');
var router = exp.Router();

router.post('/', function(req, res) {
    console.log(req.files);
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
    let sampleFile = req.files.sampleFiles;
    console.log(sampleFile.name);
    // Use the mv() method to place the file somewhere on your server 
    var a = 'public/uploads/' + sampleFile.name;
    sampleFile.mv(a, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

module.exports = router;