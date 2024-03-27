import React, { useState, useEffect } from 'react';
import "../../styles/testing.css";

function MatchCard({ match }) {
  // Check if winner is announced
  const winnerAnnounced = match.winner !== null;

  // Calculate time remaining for upcoming matches
  const currentDate = new Date();
  const matchDate = new Date(match.matchDate);
  const timeRemaining = matchDate.getTime() - currentDate.getTime();
  const hoursRemaining = Math.floor(timeRemaining / (1000 * 3600));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 3600)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // State to hold remaining time
  const [remainingTime, setRemainingTime] = useState({
    hours: hoursRemaining,
    minutes: minutesRemaining,
    seconds: secondsRemaining
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Update remaining time every second
      setRemainingTime(prevState => {
        let { hours, minutes, seconds } = prevState;
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(timer);
            } else {
              hours--;
              minutes = 59;
              seconds = 59;
            }
          } else {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds--;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Determine if the match is ongoing
  const ongoingMatch = winnerAnnounced ? false : matchDate <= currentDate;

  return (
    <div className="news-card">
      {/* Conditional rendering for header */}
      {winnerAnnounced ? (
        <h3 className="news-card__header">Completed Matches</h3>
      ) : ongoingMatch ? (
        <h3 className="news-card__header">Ongoing Matches</h3>
      ) : (
        <h3 className="news-card__header">Upcoming Matches</h3>
      )}
      <a href="#" className="news-card__card-link"></a>
      <div className="news-card__text-wrapper">
        {/* Display actual match date */}
        <p className="news-card__match-date">{new Date(match.matchDate).toLocaleString()}</p>
        {/* Conditional rendering for match details */}
        {winnerAnnounced ? (
          <>
            <h2 className="news-card__title">{`${match.team1} vs ${match.team2}`}</h2>
            <div className="news-card__details-wrapper">
              {/* Conditional styling for completed matches */}
              {winnerAnnounced && (
                <p className="news-card__excerpt">
                  <strong style={{ color: 'red' }}>{`${match.winner} won by ${Math.abs(match.runsTeam1 - match.runsTeam2)} runs`}</strong>
                </p>
              )}
            </div>
          </>
        ) : ongoingMatch ? (
          <>
            <h2 className="news-card__title">{`${match.team1} vs ${match.team2}`}</h2>
            <div className="news-card__details-wrapper">
              {/* Display ongoing match */}
              <p className="news-card__excerpt">
                <strong>Ongoing Match</strong>
              </p>
            </div>
          </>
        ) : (
        
          <>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt"><strong>{`${match.team1} vs ${match.team2}`}</strong></p>
              <p className="news-card__excerpt">
                Match in {remainingTime.hours} hours {remainingTime.minutes} minutes {remainingTime.seconds} seconds
              </p>
            </div>
          </>
        )}
      </div>
      <img src="https://images.pexels.com/photos/16062162/pexels-photo-16062162/free-photo-of-man-playing-cricket-match.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="news-card__image" />
    </div>
  );
}

export default MatchCard;
