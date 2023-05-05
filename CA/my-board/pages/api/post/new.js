import { connectDB } from '@/util/db';

export default async function uploadPost(req, res) {
  const client = await connectDB;
  const db = client.db('my-board');

  if (req.method === 'POST') {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json('Bad Request');
    } else {
      const post = await db.collection('post').insertOne({
        title: data.title,
        content: data.content,
        date: new Date(),
      });

      // 응답과 동시에 페이지 이동
      return res.status(302).redirect('/list');
    }
  }
}
