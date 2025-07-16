// //This will tell how will my book structure looks

// import mongoose from 'mongoose';

// const bookSchema = mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     author: {
//       type: String,
//       required: true,
//     },
//     publishYear: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,  //Means mongodb will auto create createdAt and updatedAt fields
//   }
// );

// export const Book = mongoose.model('Book', bookSchema);

// This will tell how will my book structure looks

import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Means mongodb will auto create createdAt and updatedAt fields
  }
);

export const Book = mongoose.model('Book', bookSchema);

