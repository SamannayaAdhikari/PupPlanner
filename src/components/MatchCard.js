import React from 'react';

function MatchCard({ match, onChatClick }) {
  return (
    <div className="match-card">
      <img src={match.profileImage} alt={match.name} />
      <h3>{match.name}</h3>
      <button onClick={() => onChatClick(match)}>Chat</button>
    </div>
  );
}

export default MatchCard;
