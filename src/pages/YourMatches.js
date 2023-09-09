import React, { useState } from 'react';
import './YourMatches.css';
import MatchCard from '../components/MatchCard';
import ChatInterface from '../components/ChatInterface';
import Header from '../components/Header';
import match1 from '../pages/pet1.jpg';
import match2 from '../pages/pet3.jpg';

const initialMatches = [
  { id: 1, name: 'Tommy', profileImage: match1 },
  { id: 2, name: 'sheru', profileImage: match2 },
  // Add more matches here
];

function YourMatches() {
  const [matches] = useState(initialMatches);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleChatClick = (match) => {
    setSelectedMatch(match);
  };

  const handlePopupClose = () => {
    setSelectedMatch(null);
  };

  return (
    <div className="your-matches-container">
      <Header />
      <h2>Your Matches</h2>
      <div className="match-list">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onChatClick={handleChatClick}
          />
        ))}
      </div>
      {selectedMatch && (
        <ChatInterface match={selectedMatch} onCloseClick={handlePopupClose} />
      )}
    </div>
  );
}

export default YourMatches;
