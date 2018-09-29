import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const formatFilter = function(req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }

};

/* configures multer to
    store files in uploads, rename according to filename method
    sets size limit of 2 mb [files is in bytes].
    and accepts only jpg and png formats
*/

const uploader = multer({
    storage: storage,
    limits: {fileSize: 1024*1024*2},
    fileFilter: formatFilter
});

export default uploader.single('img');