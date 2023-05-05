import { connectDB } from '@/util/db';

export default async function postList(req, res) {
  const client = await connectDB;
  const db = client.db('my-board');

  if (req.method === 'GET') {
    const postlist = await db.collection('post').find().toArray();
    return res.status(200).json(postlist);
  }
}
