import React, { useState } from 'react';

const CommentForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment = { title, body };
    const existing = JSON.parse(localStorage.getItem('comments') || '[]');
    localStorage.setItem('comments', JSON.stringify([...existing, comment]));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="title-input"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        data-testid="body-input"
      />
      <button type="submit" data-testid="submit-btn">Submit</button>
    </form>
  );
};

export default CommentForm;
