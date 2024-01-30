import express from "express";
const  router = express.Router();
import {createEBook,getEbook, updateEbook,deleteEbook,getBookById} from '../controllers/Ebook.js'
import upload from "../middleware/multer.js"; 
import cloudinaryConfig from "../utils/cloudinary.js"
// creat a book
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const cloud_result = await cloudinaryConfig.uploader.upload(req.file.path);
    console.log("cloud link ", cloud_result);
    
    // Assuming you want to include the Cloudinary result in the response
    res.status(200).json(cloud_result);
    
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// read all book
router.get('/',getEbook)
// get by id
router.get('/:id',getBookById)
// update book record
router.put('/:id',updateEbook)
// delete book 
router.delete('/:id',deleteEbook)
// search book
// router.get('/search',searchEBook)


export default router;