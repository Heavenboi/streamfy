import React, { useEffect, useState } from 'react';
import { fetchComments } from '../services/api';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(videoId).then(response => {
      setComments(response.data);
    });
  }, [videoId]);

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p><strong>{comment.author}:</strong> {comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;