import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/styles';

import { fixturePropType } from '../../general-prop-types';
import Fixture from '../Fixture';

import styles from './FixtureGrid.styles';

const FixtureGrid = ({ classes, fixtures }) => (
  <div className={classnames(classes.wrapper)}>
    <div className={classnames(classes.fixtureGrid)}>
      {fixtures.map(fixture => (
        <Fixture key={fixture.id} fixture={fixture} />
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
