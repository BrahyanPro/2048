import React from 'react';
import PropTypes from 'prop-types';

const NewGameButton = ({ onReset }) => {
  return (
    <button onClick={onReset} className="new-game-button">
      Nuevo Juego
    </button>
  );
};

NewGameButton.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default NewGameButton;
