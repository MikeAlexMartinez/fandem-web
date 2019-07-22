import React from 'react';

export default function testSeasonChild({ data: { seasons }, error, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  return (
    <div>
      {seasons && seasons.map(
        season => <div key={season.id} id={season.id}>{season.competition}</div>,
      )}
    </div>
  );
}
