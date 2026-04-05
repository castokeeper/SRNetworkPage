import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ArrowLeft } from 'lucide-react';
import { videos } from '../data/mockData';

export default function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find(v => v.id === id);

  if (!video) {
    return (
      <div className="player-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <h2>Video not found</h2>
        <button onClick={() => navigate(-1)} className="btn-primary" style={{ marginTop: '1rem' }}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="player-container">
      <div className="player-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
          Back
        </button>
        <span className="player-title">{video.title}</span>
        <div style={{ width: 24 }}></div> {/* spacer for centering */}
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          url={video.videoUrl}
          className="react-player"
          width="100%"
          height="100%"
          controls={true}
          playing={true}
        />
      </div>
    </div>
  );
}
