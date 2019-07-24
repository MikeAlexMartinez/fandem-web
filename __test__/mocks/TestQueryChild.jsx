/* eslint-disable react/prop-types */
import React from 'react';

export default function testSeasonChild({ data, error, loading }) {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">Error!</div>;
  }
  if (data && data.gameplayData) {
    const { gameplayData } = data;
    return (
      <div>
        {gameplayData && gameplayData.map(
          season => <div key={season.id} id={season.id}>{season.competition}</div>,
        )}
      </div>
    );
  }
  return <div className="no-data">No Data found</div>;
}
