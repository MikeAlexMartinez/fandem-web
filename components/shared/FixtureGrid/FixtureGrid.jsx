import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles, Typography } from '@material-ui/core';

import styles from './FixtureGrid.styles';
import { fixturePropType } from '../../general-prop-types';

const FixtureGrid = ({ classes, fixtures }) => (
  <div className={classnames(classes.wrapper)}>
    <div className={classnames(classes.fixtureGrid)}>
      {fixtures.map(fixture => (
        <Typography key={fixture.id} className={classnames(classes.fixture)}>{`Fixture Id: ${fixture.fixtureId}`}</Typography>
      ))}
    </div>
  </div>
);

FixtureGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  fixtures: PropTypes.arrayOf(fixturePropType),
};

FixtureGrid.defaultProps = {
  fixtures: [],
};

export default withStyles(styles)(FixtureGrid);
