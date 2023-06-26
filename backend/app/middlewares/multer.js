const multer = require('multer')
// set storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    },
})
const upload = multer({ storage: storage });


module.exports = upload