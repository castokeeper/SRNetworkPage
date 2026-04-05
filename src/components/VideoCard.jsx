import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function VideoCard({ video }) {
  return (
    <Link to={`/watch/${video.id}`} className="video-card">
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="play-overlay">
          <div className="play-button">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="video-info">
        <div className="video-type">{video.type}</div>
        <h3 className="video-title">{video.title}</h3>
        <p className="video-desc">{video.description}</p>
      </div>
    </Link>
  );
}
