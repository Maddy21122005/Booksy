// export const PORT = 5555;

// export const mongoDBURL =
//   'mongodb+srv://madhavpoddar2005:madhav1452@cluster0.bexqlxd.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0';

import dotenv from 'dotenv';
dotenv.config();

export const PORT = 5555;
export const mongoDBURL = process.env.MONGODB_URI;

