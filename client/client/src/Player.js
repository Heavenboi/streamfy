// src/Player.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';
import LikeButton from './components/LikeButton';

const Player = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({});
  const userId = 'user-id'; // Replace with actual user ID logic

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/video/${id}/data`);
        const data = await res.json();
        setVideoData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoData();
  }, [id]);

  return (
    <div className="App">
      <header className="App-header">
        <video controls muted autoPlay>
          <source src={`http://localhost:4000/video/${id}`} type="video/mp4" />
        </video>
        <LikeButton videoId={id} userId={userId} />
        <CommentList videoId={id} />
        <AddComment videoId={id} />
      </header>
    </div>
  );
};

export default Player;