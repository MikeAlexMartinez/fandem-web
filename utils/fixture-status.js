export const fixtureStatus = {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
};

export const determineFixtureStatus = ({
  minutes,
  finished,
}) => {
  if (finished) return fixtureStatus.FINISHED;
  if (minutes > 0) return fixtureStatus.STARTED;
  return fixtureStatus.NOT_STARTED;
};
