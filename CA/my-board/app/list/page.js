import { connectDB } from '@/util/db';

export default async function List() {
  const client = await connectDB;
  const db = client.db('my-board');
  const result = await db.collection('post').find().toArray();
  return (
    <div className='list-bg'>
      {result.map((item, index) => (
        <div className='list-item' key={index}>
          <h4>{item.title}</h4>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
