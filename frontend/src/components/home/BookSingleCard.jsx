// import { Link } from 'react-router-dom';
// import { PiBookOpenTextLight } from 'react-icons/pi';
// import { BiUserCircle, BiShow } from 'react-icons/bi';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineDelete } from 'react-icons/md';
// import { useState } from 'react';
// import BookModal from './BookModal';

// const BookSingleCard = ({ book }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
//       <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
//         {book.publishYear}
//       </h2>
//       <h4 className='my-2 text-gray-500'>{book._id}</h4>
//       <div className='flex justify-start items-center gap-x-2'>
//         <PiBookOpenTextLight className='text-red-300 text-2xl' />
//         <h2 className='my-1'>{book.title}</h2>
//       </div>
//       <div className='flex justify-start items-center gap-x-2'>
//         <BiUserCircle className='text-red-300 text-2xl' />
//         <h2 className='my-1'>{book.author}</h2>
//       </div>
//       <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
//         <BiShow
//           className='text-3xl text-blue-800 hover:text-black cursor-pointer'
//           onClick={() => setShowModal(true)}
//         />
//         <Link to={`/books/details/${book._id}`}>
//           <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
//         </Link>
//         <Link to={`/books/edit/${book._id}`}>
//           <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
//         </Link>
//         <Link to={`/books/delete/${book._id}`}>
//           <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
//         </Link>
//       </div>
//       {showModal && (
//         <BookModal book={book} onClose={() => setShowModal(false)} />
//       )}
//     </div>
//   );
// };

// export default BookSingleCard;
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative border border-gray-300 bg-white rounded-xl p-4 m-4 shadow-sm hover:shadow-lg transition-all">
      {/* Pill badge for publishYear */}
      <div className="absolute top-2 right-2 bg-rose-300 text-blue-800 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
        {book.publishYear}
      </div>

      {/* Book ID */}
      <h4 className="text-xs text-gray-500 break-all mb-3">{book._id}</h4>

      {/* Book title */}
      <div className="flex items-center gap-2 mb-2">
        <PiBookOpenTextLight className="text-red-300 text-xl" />
        <h2 className="text-base font-semibold text-blue-600">{book.title}</h2>
      </div>

      {/* Author */}
      <div className="flex items-center gap-2 mb-4">
        <BiUserCircle className="text-red-300 text-xl" />
        <h2 className="text-base font-semibold text-blue-600">{book.author}</h2>
      </div>

      {/* Action icons */}
      <div className="flex justify-around mt-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-xl text-green-700 hover:text-black cursor-pointer" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-xl text-yellow-600 hover:text-black cursor-pointer" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-xl text-red-600 hover:text-black cursor-pointer" />
        </Link>
      </div>

      {/* Optional modal */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;


