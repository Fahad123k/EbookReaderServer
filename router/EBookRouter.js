import express from "express";
const  router = express.Router();
import {createEBook,getEbook, updateEbook,deleteEbook,getBookById} from '../controllers/Ebook.js'
// creat a book
router.post('/',createEBook)
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