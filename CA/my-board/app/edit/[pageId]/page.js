import { connectDB } from '@/util/db';
import { ObjectId } from 'mongodb';

export default async function Edit({ params }) {
  const client = await connectDB;
  const db = client.db('my-board');
  const result = await db.collection('post').findOne({ _id: new ObjectId(params.pageId) });

  return (
    <div className='p-20'>
      <h3>수정 페이지</h3>
      <form action='/api/post/edit' method='PUT'>
        <input
          name='title'
          type='text'
          placeholder='제목을 입력하세요.'
          defaultValue={result.title}
        />
        <textarea
          rows={10}
          cols={30}
          name='content'
          placeholder='내용을 입력하세요.'
          defaultValue={result.content}
        />
        <button type='submit'>등록</button>
      </form>
    </div>
  );
}
