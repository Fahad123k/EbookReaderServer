import { EBook } from '../model/EBook.js';
import mongoose from 'mongoose';

// create book
export const createEBook = async (req, res) => {
  try {
    const ebook = await EBook.create(req.body);
    res.status(201).json(ebook);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get all

export const getEbook = async (req, res) => {
  try {
    let page = parseInt(req.query.page, 10) || 1;
    page = Math.max(page - 1, 0); // Ensure page is at least 0

    const limit = 10;
    const search = req.query.search || '';

    const query = search
      ? {
          $or: [
            { title: { $regex: new RegExp(search, 'i') } },
            { author: { $regex: new RegExp(search, 'i') } },
            { genre: { $regex: new RegExp(search, 'i') } },
            { language: { $regex: new RegExp(search, 'i') } },
            { publisher: { $regex: new RegExp(search, 'i') } },
          ],
        }
      : {};

    const totalRecord = await EBook.countDocuments(query);
    const totalPage = Math.ceil(totalRecord / limit);

    if (page >= totalPage) {
      return res.status(404).json({ message: 'No more data available' });
    }

    const ebooks = await EBook.find(query)
      .skip(page * limit)
      .limit(limit);

    res.status(200).json({
      totalPage,
      page: page + 1, // Adjusted to provide the current page number
      eBooks: ebooks,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//   get by id

export const getBookById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }
    const ebook = await EBook.findById(req.params.id);
    if (!ebook) return res.status(404).json({ error: "Book not found" })
    res.status(200).json(ebook)

  } catch (error) {
    res.status(500).json({ error: error.message })

  }
}

//   update book
export const updateEbook = async (req, res) => {
  try {
    // new true means modifed data
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }
    const result = await EBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!result) return res.status(404).json({ message: "Book record not found" });
    res.status(200).json(result)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// delete ebbok
export const deleteEbook = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }
    const result = await EBook.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Book record not found" });
    res.status(200).json({ message: "Book deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


// export const searchEBook = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page, 10) - 1 || 0;
//     const limit = parseInt(req.query.limit, 10) || 10;
//     const search = req.query.search || "";
//     let sort = req.query.sort || "rating";
//     let genre = req.query.genre || "All";

//     const genreOption = [
//       "Action",
//       "Romance",
//       "Drama",
//       "Crime",
//       "Adventure",
//       "Thriller",
//       "Sci-fi",
//       "Music",
//       "Family"
//     ];

//     genre === "All"
//       ? (genre = [...genreOption])
//       : (genre = req.query.genre.split(","));

//     req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);
    
//     let sortBy = {};
//     if (sort[1]) {
//       sortBy[sort[0]] = sort[1];
//     } else {
//       sortBy[sort[0]] = "asc";
//     }

//     const result = await EBook.find({
//       $or: [
//         { title: { $regex: new RegExp(search, 'i') } },
//         { author: { $regex: new RegExp(search, 'i') } },
//         { genre: { $regex: new RegExp(search, 'i') } },
//         { language: { $regex: new RegExp(search, 'i') } },
//         { publisher: { $regex: new RegExp(search, 'i') } }
//       ]
//     })
//       .where("genre")
//       .in(genre)
//       .sort(sortBy)
//       .skip(page * limit)
//       .limit(limit);

//     const totalRecord = await EBook.countDocuments({
//       $or: [
//         { title: { $regex: new RegExp(search, 'i') } },
//         { author: { $regex: new RegExp(search, 'i') } },
//         { genre: { $regex: new RegExp(search, 'i') } },
//         { language: { $regex: new RegExp(search, 'i') } },
//         { publisher: { $regex: new RegExp(search, 'i') } }
//       ]
//     });


//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

