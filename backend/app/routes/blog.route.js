const express = require("express");
const router = express.Router();
const { blogController } = require("../controllers/blogController");
const multer = require('multer')
// const authMiddleware = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", blogController.getAll);
router.get("/:id", blogController.getById);
router.post("/", upload.single('image'),blogController.add);
router.delete("/:id", blogController.delete);
router.put(
  '/:id',
  upload.single('image'),
  blogController.edit,
)
module.exports = router;
