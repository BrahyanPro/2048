import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BoardSize from '../board-size/board-size';
import NewGameButton from '../new-game-button/new-game-button';

class NewGame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.defaultSize,
    };
    this._handleSizeChange = this._handleSizeChange.bind(this);
  }

  _handleSizeChange(size) {
    this.setState({ size });
  }

  render() {
    return (
      <>
        <BoardSize size={this.state.size} onSelect={this._handleSizeChange} />
        <NewGameButton onReset={() => this.props.onReset(this.state.size)} />
      </>
    );
  }
}

NewGame.propTypes = {
  onReset: PropTypes.func.isRequired,
  defaultSize: PropTypes.number.isRequired,
};

export default NewGame;
