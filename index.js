import express from "express";
// import { PORT,MONGODB_URI } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./router/bookRouter.js"
import eBookRouter from "./router/EBookRouter.js"
import dotenv from "dotenv"
import cors from "cors";
const app=express();
dotenv.config();

// middle  ware for parsing request body
app.use(express.json())

// use as middlewere
// two waue for use cors
// first way
app.use(cors());

// app.use(cors({
//   origin:"http://localhost:3000",
//   methods:['GET','POST','PUT','DELETE'],
//   allowedHeaders:["Content-Type"]
// }))


  //   const large=
  //   [
  //     {
  //       "title": "The Great Gatsby",
  //       "description": "A novel by F. Scott Fitzgerald",
  //       "author": "F. Scott Fitzgerald",
  //       "publicationYear": 1925,
  //       "rating": 4.5,
  //       "ISBNs": "978-3-16-148410-0",
  //       "genre": ["Fiction", "Classics"],
  //       "publisher": "Charles Scribner's Sons",
  //       "language": "English",
  //       "pages": 180,
  //       "coverImageUrl": "https://example.com/great-gatsby-cover.jpg",
  //       "ratings": [
  //         { "user": "user123", "rating": 4.5 },
  //         { "user": "user456", "rating": 5 }
  //       ],
  //       "reviews": [
  //         { "user": "user789", "text": "An amazing read!" },
  //         { "user": "user101", "text": "Could not put it down!" }
  //       ]
  //     },
  //     {
  //       "title": "To Kill a Mockingbird",
  //       "description": "A novel by Harper Lee",
  //       "author": "Harper Lee",
  //       "publicationYear": 1960,
  //       "rating": 4.8,
  //       "ISBNs": "978-0-06-112008-4",
  //       "genre": ["Fiction", "Classics"],
  //       "publisher": "J.B. Lippincott & Co.",
  //       "language": "English",
  //       "pages": 281,
  //       "coverImageUrl": "https://example.com/to-kill-a-mockingbird-cover.jpg",
  //       "ratings": [
  //         { "user": "user789", "rating": 5 },
  //         { "user": "user456", "rating": 4.8 }
  //       ],
  //       "reviews": [
  //         { "user": "user123", "text": "A classic that everyone should read!" },
  //         { "user": "user101", "text": "Absolutely loved it!" }
  //       ]
  //     },
  //     {
  //       "title": "1984",
  //       "description": "A dystopian novel by George Orwell",
  //       "author": "George Orwell",
  //       "publicationYear": 1949,
  //       "rating": 4.7,
  //       "ISBNs": "978-0-452-28423-4",
  //       "genre": ["Fiction", "Dystopian"],
  //       "publisher": "Secker & Warburg",
  //       "language": "English",
  //       "pages": 328,
  //       "coverImageUrl": "https://example.com/1984-cover.jpg",
  //       "ratings": [
  //         { "user": "user987", "rating": 4.7 },
  //         { "user": "user654", "rating": 5 }
  //       ],
  //       "reviews": [
  //         { "user": "user321", "text": "Mind-blowing and thought-provoking!" },
  //         { "user": "user555", "text": "A must-read for everyone." }
  //       ]
  //     },
  //     {
  //       "title": "Brave New World",
  //       "description": "A novel by Aldous Huxley",
  //       "author": "Aldous Huxley",
  //       "publicationYear": 1932,
  //       "rating": 4.2,
  //       "ISBNs": "978-0-06-085052-4",
  //       "genre": ["Fiction", "Dystopian"],
  //       "publisher": "Chatto & Windus",
  //       "language": "English",
  //       "pages": 311,
  //       "coverImageUrl": "https://example.com/brave-new-world-cover.jpg",
  //       "ratings": [
  //         { "user": "user123", "rating": 4.0 },
  //         { "user": "user789", "rating": 4.5 }
  //       ],
  //       "reviews": [
  //         { "user": "user101", "text": "Thought-provoking and relevant!" },
  //         { "user": "user456", "text": "Couldn't stop reading!" }
  //       ]
  //     },
  //     {
  //       "title": "The Catcher in the Rye",
  //       "description": "A novel by J.D. Salinger",
  //       "author": "J.D. Salinger",
  //       "publicationYear": 1951,
  //       "rating": 4.0,
  //       "ISBNs": "978-0-316-76948-0",
  //       "genre": ["Fiction", "Classics"],
  //       "publisher": "Little, Brown and Company",
  //       "language": "English",
  //       "pages": 224,
  //       "coverImageUrl": "https://example.com/catcher-in-the-rye-cover.jpg",
  //       "ratings": [
  //         { "user": "user789", "rating": 4.0 },
  //         { "user": "user555", "rating": 3.5 }
  //       ],
  //       "reviews": [
  //         { "user": "user101", "text": "A unique perspective on adolescence." },
  //         { "user": "user456", "text": "Captivating and introspective." }
  //       ]
  //     },
  //     {
  //       "title": "One Hundred Years of Solitude",
  //       "description": "A novel by Gabriel García Márquez",
  //       "author": "Gabriel García Márquez",
  //       "publicationYear": 1967,
  //       "rating": 4.5,
  //       "ISBNs": "978-0-06-112008-4",
  //       "genre": ["Fiction", "Magical Realism"],
  //       "publisher": "Harper & Row",
  //       "language": "Spanish",
  //       "pages": 417,
  //       "coverImageUrl": "https://example.com/one-hundred-years-of-solitude-cover.jpg",
  //       "ratings": [
  //         { "user": "user123", "rating": 4.5 },
  //         { "user": "user987", "rating": 5 }
  //       ],
  //       "reviews": [
  //         { "user": "user789", "text": "A masterpiece of magical realism!" },
  //         { "user": "user101", "text": "Epic and enchanting." }
  //       ]
  //     },
  //     {
  //       "title": "The Hobbit",
  //       "description": "A novel by J.R.R. Tolkien",
  //       "author": "J.R.R. Tolkien",
  //       "publicationYear": 1937,
  //       "rating": 4.6,
  //       "ISBNs": "978-0-261-10254-1",
  //       "genre": ["Fiction", "Fantasy"],
  //       "publisher": "Allen & Unwin",
  //       "language": "English",
  //       "pages": 310,
  //       "coverImageUrl": "https://example.com/the-hobbit-cover.jpg",
  //       "ratings": [
  //         { "user": "user456", "rating": 4.5 },
  //         { "user": "user555", "rating": 5 }
  //       ],
  //       "reviews": [
  //         { "user": "user789", "text": "A classic fantasy adventure!" },
  //         { "user": "user987", "text": "Magical and delightful." }
  //       ]
  //     },
  //     {
  //       "title": "Lord of the Flies",
  //       "description": "A novel by William Golding",
  //       "author": "William Golding",
  //       "publicationYear": 1954,
  //       "rating": 4.1,
  //       "ISBNs": "978-0-399-11270-1",
  //       "genre": ["Fiction", "Classics"],
  //       "publisher": "Faber and Faber",
  //       "language": "English",
  //       "pages": 224,
  //       "coverImageUrl": "https://example.com/lord-of-the-flies-cover.jpg",
  //       "ratings": [
  //         { "user": "user123", "rating": 4.0 },
  //         { "user": "user101", "rating": 4.2 }
  //       ],
  //       "reviews": [
  //         { "user": "user789", "text": "Powerful and thought-provoking." },
  //         { "user": "user555", "text": "A chilling exploration of human nature." }
  //       ]
  //     },
  //     {
  //       "title": "Moby-Dick",
  //       "description": "A novel by Herman Melville",
  //       "author": "Herman Melville",
  //       "publicationYear": 1851,
  //       "rating": 3.9,
  //       "ISBNs": "978-0-14-243724-7",
  //       "genre": ["Fiction", "Classics"],
  //       "publisher": "Harper & Brothers",
  //       "language": "English",
  //       "pages": 635,
  //       "coverImageUrl": "https://example.com/moby-dick-cover.jpg",
  //       "ratings": [
  //         { "user": "user456", "rating": 3.8 },
  //         { "user": "user987", "rating": 4.0 }
  //       ],
  //       "reviews": [
  //         { "user": "user101", "text": "A challenging but rewarding read." },
  //         { "user": "user555", "text": "Epic and unforgettable." }
  //       ]
  //     },
  // ]
  // try {
  //   const ebooks = await EBook.insertMany(large, { ordered: false });
  //   console.log('Successfully inserted documents:', ebooks);
  // } catch (error) {
  //   console.error('Error inserting documents:', error);
  // }
  


app.get('/',(req,res)=>{
  res.status(200).send("okkk")
})

app.use('/books',bookRouter)
app.use('/ebooks',eBookRouter)
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{

  console.log("MongoDb is Connected");
  app.listen(process.env.PORT,()=>{
    console.log(`App is runninig on port :${process.env.PORT}`)  
  })
})
.catch((e)=>{
  console.log("Error on conncection mongodb",e)
})