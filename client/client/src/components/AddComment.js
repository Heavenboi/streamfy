import React, { useState } from 'react';
import { postComment } from '../services/api';

const AddComment = ({ videoId }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(videoId, { text: commentText }).then(response => {
      setCommentText('');
      // Optionally refresh the comment list or notify parent component
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default AddComment;