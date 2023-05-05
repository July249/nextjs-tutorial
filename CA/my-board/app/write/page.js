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
  };

  return (
    <div className='write-bg'>
      <h3>글 작성</h3>
      <div className='write-container'>
        <form action='/api/test' method='POST' onSubmit={handleSubmit}>
          <div className='write-title'>
            <input type='text' placeholder='제목을 입력하세요.' />
          </div>

          <div className='write-content'>
            <textarea placeholder='내용을 입력하세요.' />
          </div>

          <div className='write-btn'>
            <button type='submit'>등록</button>
          </div>
        </form>
      </div>
    </div>
  );
}
