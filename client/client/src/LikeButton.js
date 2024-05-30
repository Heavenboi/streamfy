import React, { useState, useEffect } from 'react';
import { toggleLike, fetchLikes } from '../services/api';

const LikeButton = ({ videoId, userId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetchLikes(videoId).then(response => {
      setLikes(response.data.likes);
      setLiked(response.data.userHasLiked);
    });
  }, [videoId]);

  const handleLikeToggle = () => {
    toggleLike(videoId, userId).then(response => {
      setLikes(response.data.likes);
      setLiked(response.data.userHasLiked);
    });
  };

  return (
    <button onClick={handleLikeToggle}>
      {liked ? 'Unlike' : 'Like'} ({likes})
    </button>
  );
};

export default LikeButton;