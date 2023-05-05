'use client';

export default function Write() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const content = e.target[1].value;
    const data = { title, content };
    fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <div className='p-20'>
      <h3>글 작성</h3>
      <form action='/api/post/new' method='POST' onSubmit={handleSubmit}>
        <input name='title' type='text' placeholder='제목을 입력하세요.' />
        <textarea rows={10} cols={30} name='content' placeholder='내용을 입력하세요.' />
        <button type='submit'>등록</button>
      </form>
    </div>
  );
}
