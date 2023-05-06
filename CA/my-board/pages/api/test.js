// import { connectDB } from '@/util/db';

// export default async function handler(req, res) {
//   const client = await connectDB;
//   const db = client.db('my-board');

//   if (req.method === 'GET') {
//     const posts = await getPost(db);
//     if (!posts) {
//       return res.status(200).json('No Posts, yet!');
//     }
//     return res.status(200).json(posts);
//   } else if (req.method === 'POST') {
//     console.log('request', req);
//     if (!req.body.title || !req.body.content) {
//       return res.status(400).json('Bad Request');
//     } else {
//       const post = await addPost(db, req.body);
//       return res.status(200).json(post);
//     }
//   } else if (req.method === 'PUT') {
//     return res.status(200).json('Success');
//   } else if (req.method === 'DELETE') {
//     return res.status(200).json('Success');
//   }
// }

// export async function getPost(db) {
//   const result = await db.collection('post').find().toArray();
//   return result;
// }

// async function addPost(db, data) {
//   const result = await db.collection('post').insertOne({
//     title: data.title,
//     content: data.content,
//     date: new Date(),
//   });
//   return result;
// }

// async function updatePost(db, data) {
//   const result = await db.collection('post').updateOne({ title: data.title });
//   return result;
// }

// async function deletePost(db, data) {
//   const result = await db.collection('post').deleteOne({ title: data._id });
//   return result;
// }
