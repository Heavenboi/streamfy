import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import AddComment from './AddComment';
import LikeButton from './LikeButton';

const Player = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 'user-id'; // Replace with actual user ID logic

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`https://streamfy-xiyz.onrender.com/videos/${id}`); // Corrected fetch URL
        if (!response.ok) {
          throw new Error('Failed to fetch video data.');
        }
        const data = await response.json();
        setVideoData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{videoData.title}</h1>
        <p>{videoData.description}</p>
        <video controls muted autoPlay>
          <source src={`https://streamfy-xiyz.onrender.com/videos/${id}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <LikeButton videoId={id} userId={userId} />
        <CommentList videoId={id} />
        <AddComment videoId={id} />
      </header>
    </div>
  );
};

export default Player;