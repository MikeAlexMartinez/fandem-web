/* eslint-disable react/prop-types */
import React from 'react';

export default function testSeasonChild({ data, error, loading }) {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">Error!</div>;
  }
  const { seasons } = data;
  return (
    <div>
      {seasons && seasons.map(
        season => <div key={season.id} id={season.id}>{season.competition}</div>,
      )}
    </div>
  );
}
