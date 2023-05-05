import { connectDB } from '@/util/db';

export default async function newPost(req, res) {
  const client = await connectDB;
  const db = client.db('my-board');

  if (req.method === 'POST') {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json('Bad Request');
    }
    try {
      const post = await db.collection('post').insertOne({
        title: req.body.title,
        content: req.body.content,
        date: new Date(),
      });

      // 응답과 동시에 페이지 이동
      res.redirect(302, '/list');
    } catch (error) {
      console.error(error);
    }
  }
}
