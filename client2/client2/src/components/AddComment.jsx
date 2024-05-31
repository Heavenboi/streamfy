import  { useState } from 'react';
import { postComment } from '../services/api';

const AddComment = ({ videoId }) => {
  const [commentText, setCommentText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await postComment(videoId, { text: commentText });
      setCommentText('');
      // Optionally refresh the comment list or notify parent component
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment">Add a comment:</label>
        <textarea
          id="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Posting...' : 'Post Comment'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddComment;