import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true }
});

const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true }
});

const ebookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  rating: { type: Number, required: false },
  ISBNs: { type: String, required: true },
  genre: { type: [String], required: true },
  publisher: { type: String, required: true },
  language: { type: String, required: true },
  pages: { type: Number, required: true },
  coverImageUrl: { type: String, required: false },
  ratings: { type: [ratingSchema], required: false },
  reviews: { type: [reviewSchema], required: false }
}, {
  timestamps: true
});

export const EBook = mongoose.model('eBook', ebookSchema);


