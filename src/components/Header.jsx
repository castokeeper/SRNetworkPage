import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-brand">
        <PlayCircle size={28} />
        <span>AzureStream</span>
      </Link>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/">Anime</Link>
        <Link to="/">Lives</Link>
      </nav>
    </header>
  );
}
