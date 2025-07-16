// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import BooksTable from '../components/home/BooksTable';
// import BooksCard from '../components/home/BooksCard';

// const Home = () => {
//   const [books, setBooks] = useState([]); // books data store in books
//   const [loading, setLoading] = useState(false); // when loading ,sppiner will move ,when api calls ,it is true
//   const [showType, setShowType] = useState('table'); // for table and card

//   useEffect(() => {  //React Hook ,handles side effects (api calls,event listner ,time etc) // here used to fetch books from backend
//     setLoading(true); //Spinner starts
//     axios //API Request Library
//       .get('http://localhost:5555/books') //sent get request to backend to show all books
//       .then((response) => {
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []); //[] run only one time when page reloaded

//   return (
//     <div className='p-4'>
//       <div className='flex justify-center items-center gap-x-4'>
//         <button
//           className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//           onClick={() => setShowType('table')}
//         >
//           Table
//         </button>
//         <button
//           className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//           onClick={() => setShowType('card')}
//         >
//           Card
//         </button>
//       </div>
//       <div className='flex justify-between items-center'>
//         <h1 className='text-3xl my-8'>Books List</h1>
//         <Link to='/books/create'>
//           <MdOutlineAddBox className='text-sky-800 text-4xl' />
//         </Link>
//       </div>
//       {loading ? ( //loading true ,spinner shows
//         <Spinner />
//       ) : showType === 'table' ? (
//         <BooksTable books={books} />
//       ) : (
//         <BooksCard books={books} />
//       )}
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import BooksTable from '../components/home/BooksTable';
// import BooksCard from '../components/home/BooksCard';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showType, setShowType] = useState('table');

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:5555/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className='p-4 min-h-screen bg-light text-dark font-sans'>
//       {/* View Toggle Buttons */}
//       <div className='flex justify-center items-center gap-x-4 mb-4'>
//         <button
//           className={`px-4 py-2 rounded-md shadow transition duration-200 ${
//             showType === 'table'
//               ? 'bg-primary text-white'
//               : 'bg-white border border-primary text-primary'
//           }`}
//           onClick={() => setShowType('table')}
//         >
//           Table View
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md shadow transition duration-200 ${
//             showType === 'card'
//               ? 'bg-primary text-white'
//               : 'bg-white border border-primary text-primary'
//           }`}
//           onClick={() => setShowType('card')}
//         >
//           Card View
//         </button>
//       </div>

//       {/* Title and Add Book Button */}
//       <div className='flex justify-between items-center mb-6'>
//         <h1 className='text-4xl font-bold text-primary'>📚 Booksy Library</h1>
//         <Link to='/books/create'>
//           <button className='flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200 shadow-md'>
//             <MdOutlineAddBox className='text-xl' />
//             Add Book
//           </button>
//         </Link>
//       </div>

//       {/* Book Table or Cards */}
//       {loading ? (
//         <Spinner />
//       ) : showType === 'table' ? (
//         <BooksTable books={books} />
//       ) : (
//         <BooksCard books={books} />
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 min-h-screen bg-light text-dark font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-primary">📚 Booksy</h1>
        
        <Link
          to="/books/create"
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          <MdOutlineAddBox className="text-2xl" />
          <span>Add Book</span>
        </Link>
      </div>

      {/* Toggle View */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowType('table')}
          className={`px-4 py-2 rounded-lg shadow-sm ${
            showType === 'table'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Table View
        </button>
        <button
          onClick={() => setShowType('card')}
          className={`px-4 py-2 rounded-lg shadow-sm ${
            showType === 'card'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Card View
        </button>
      </div>

      {/* Book List */}
      {loading ? (
        <Spinner />
      ) : books.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No books found.</p>
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}

      {/* Footer */}
      {/* <div className="mt-12 text-center text-sm text-gray-500">
        © 2025 Booksy. All rights reserved.
      </div> */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © 2025 <span className="text-primary font-semibold">Booksy</span> by <span className="text-dark font-bold">Madhav Poddar</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Home;

