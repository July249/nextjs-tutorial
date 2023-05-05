import { connectDB } from '@/util/db';

export default async function Home() {
  const client = await connectDB;
  const db = client.db('my-board');
  // post 컬렉션 조회
  const result = await db.collection('post').find().toArray();
  return (
    <div>
      <h1>{result[0].title}</h1>
      <p>{result[0].content}</p>
    </div>
  );
}
