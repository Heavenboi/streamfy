import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Player = ({ match }) => {
  const [videoData, setVideoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoId = match.params.id;

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/video/${videoId}/data`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setVideoData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [videoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App-header">
      <Header />
      <video controls muted autoPlay crossOrigin="anonymous">
        <source src={`http://localhost:4000/video/${videoId}`} type="video/mp4" />
        <track 
          label="English" 
          kind="captions" 
          srcLang="en" 
          src={`http://localhost:4000/video/${videoId}/caption`} 
          default 
        />
      </video>
      <h1>{videoData.name}</h1>
      <Footer />
    </div>
  );
};

Player.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Player;
