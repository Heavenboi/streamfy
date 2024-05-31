import { useState, useEffect } from 'react';
import { toggleLike, fetchLikes } from '../services/api';

const LikeButton = ({ videoId, userId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadLikes = async () => {
      try {
        const response = await fetchLikes(videoId);
        setLikes(response.data.likes);
        setLiked(response.data.userHasLiked);
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    loadLikes();
  }, [videoId]);

  const handleLikeToggle = async () => {
    setLoading(true);
    try {
      // Optimistically update the UI
      setLikes(likes + (liked ? -1 : 1));
      setLiked(!liked);

      const response = await toggleLike(videoId, userId);
      // Sync with the server response
      setLikes(response.data.likes);
      setLiked(response.data.userHasLiked);
    } catch (error) {
      console.error('Error toggling like:', error);
      // Rollback UI update on error
      setLikes(likes - (liked ? -1 : 1));
      setLiked(liked);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLikeToggle} disabled={loading}>
      {liked ? 'Unlike' : 'Like'} ({likes})
    </button>
  );
};

export default LikeButton;