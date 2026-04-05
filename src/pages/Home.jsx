import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import Header from '../components/Header';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/mockData';

export default function Home() {
  const featuredVideo = videos[0];

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-info">
            <div style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>FEATURED {featuredVideo.type.toUpperCase()}</div>
            <h1>{featuredVideo.title}</h1>
            <p>{featuredVideo.description}</p>
            <Link to={`/watch/${featuredVideo.id}`} className="btn-primary">
              <Play fill="currentColor" size={20} />
              Watch Now
            </Link>
          </div>
        </section>

        <section>
          <h2 className="section-title">Trending Anime & Works</h2>
          <div className="video-grid">
            {videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
