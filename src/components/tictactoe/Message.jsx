export const Message = ({ winner, player, isTie, handleRestart }) => {
    if (winner) {
      return (
        <div className="message">
          <p className={ winner }>Ganador: {winner}</p>
          <button onClick={handleRestart}>Volver a jugar</button>
        </div>
      );
    } else if ( isTie() ) {
      return (
        <div className="message">
          <p>Empate</p>
          <button onClick={handleRestart}>Volver a jugar</button>
        </div>
      );
    } else {
      return (
        <div className="message">
          <p>Turno de: <strong className={ player }>{ player }</strong></p>
        </div>
      );
    }
  };