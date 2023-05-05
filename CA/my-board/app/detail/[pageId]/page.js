import { connectDB } from '@/util/db';
import { ObjectId } from 'mongodb';

export default async function Detail({ params, searchParams }) {
  const { pageId } = params;
  const client = await connectDB;
  const db = client.db('my-board');
  const result = await db.collection('post').findOne({ _id: new ObjectId(pageId) });
  return (
    <div className='detail-bg'>
      <div className='detail-page'>
        <h3>상세 페이지</h3>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
      </div>
    </div>
  );
}
