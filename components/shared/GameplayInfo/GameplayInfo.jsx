import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import Title from '../Title';
import GameData from '../GameData';
import GameplayDataSummary from '../GameplayDataSummary';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './GameplayInfo.styles';
import GameweekAccordion from '../GameweekAccordion';

class GameplayInfo extends Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  state = {
    expandedGameweek: null,
  };

  toggleGameweek = (gameweekId) => {
    this.setState({
      expandedGameweek: gameweekId,
    });
  }

  render() {
    const { classes } = this.props;
    const { expandedGameweek } = this.state;
    return (
      <div>
        <Title title="Gameplay Information" />
        <GameData>
          {(data, error, loading) => {
            if (loading) {
              return (
                <div className={classnames(classes.loading)}>
                  <CircularProgress
                    style={{
                      height: '100px',
                      width: '100px',
                    }}
                    color="secondary"
                  />
                </div>
              );
            }
            if (error) {
              return <ErrorMessage message="Error fetching gameplay data..." />;
            }
            if (data && data.data && data.data.gameplayData && data.data.gameplayData.length > 0) {
              const { data: { gameplayData } } = data;
              const season = gameplayData[0];
              const currentGameweek = (season.currentGameweek
                && season.currentGameweek.length > 0
                && season.currentGameweek[0]
              ) || null;
              const nextGameweek = (season.nextGameweek
                && season.nextGameweek.length > 0
                && season.nextGameweek[0]
              ) || null;
              const previousGameweek = (season.previousGameweek
                && season.previousGameweek.length > 0
                && season.previousGameweek[0]
              ) || null;
              const { id, label, competition } = season;
              const seasonInfo = { id, label, competition };
              return (
                <div>
                  <GameplayDataSummary
                    previousGameweek={previousGameweek}
                    currentGameweek={currentGameweek}
                    nextGameweek={nextGameweek}
                    seasonInfo={seasonInfo}
                    toggleGameweek={this.toggleGameweek}
                  />
                  <GameweekAccordion
                    gameweeks={season.events}
                    openGameweek={expandedGameweek}
                    toggleGameweek={this.toggleGameweek}
                  />
                </div>
              );
            }
            return <ErrorMessage message="No data retrieved!" />;
          }}
        </GameData>
      </div>
    );
  }
}

export default withStyles(styles)(GameplayInfo);
