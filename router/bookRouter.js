import express from "express";
import { Book } from "../model/book.js";
import mongoose from "mongoose";
const router =express.Router()





  
  // delete book
  router.delete('/:id',async(req,res)=>{
    try {
      const {id}=req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID format" });
      }
      const result= await Book.findByIdAndDelete(id);
      if(!result){
        return res.status(404).json({message:"Book not found"})
      }
      return res.status(200).send({message:"Book deleted Successfully"})
      
    } catch (error) {
      console.log("Server error",error.message);
      res.status(500).send({message:error.message})
      
    }
  })
  // update books
  router.put("/:id",async(req,res)=>{
    try {
      if(!req.body.title || !req.body.author || !req.body.publishYear){
        return res.status(400).send({
          message:"Fill all required fileds ,title, author, publishYear"
        })
      }
      const {id}=req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID format" });
      }
      const result=await Book.findByIdAndUpdate(id,req.body);
      
      if(!result){
        res.status(404).json({message:"Book record not found"});
      }
  
      res.status(200).send({"Info":"Book record update Succesfully","Result":result });
      
    } catch (error) {
      console.log("Server error",error.message);
      res.status(500).send({message:error.message})
      
    }
  
  })
  // get books by id
  router.get('/:id',async (req,res)=>{
    try {
      const {id}= req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID format" });
      }
      const book =await Book.findById(id);
      if(!book){
        return res.status(404).json({message:"Book not found"})
      }
      res.status(200).send(book)
    } catch (error) {
      res.status(500).send({message:error.message})
      console.log("Some Error occureed in server".error.message)
      
    }
  })
  
  // get book
  router.get('/',async(req,res)=>{
    try {
      const books =await Book.find({});
      res.status(200).send({
        count:books.length,
        data:books
      })
    } catch (error) {
      res.status(500).send({message:error.message})
      console.log("Some Error occureed in server".error.message)
      
    }
  })
  // create book
  router.post("/",async(req,res)=>{
    try {
      if(!req.body.title || !req.body.author || !req.body.publishYear){
        return res.status(400).send({
          message:"Fill all required fileds ,title, author, publishYear"
        })
      }
      const newBook={
        title:req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear
      } 
  
      const book= await Book.create(newBook);
      return res.status(201).send(book)
      
    } catch (error) {
      console.log("errr",error.message)
      res.status(500).send({message:error.message})
      
    }
  
  })

export default router;
