import { Modal } from './Modal'

export const Message = ({ winner, player, isTie, handleRestart }) => {
  if (winner) {
    return (
      <div className='message'>
        <Modal
          msgText={`Ganador: ${winner}`}
          msgButton='Reiniciar partida.'
          className={winner}
          handleRestart={handleRestart}
        />
      </div>
    )
  } else if (isTie()) {
    return (
      <div className='message'>
        <Modal
          msgText='Empate'
          msgButton='Volver a jugar.'
          className=''
          handleRestart={handleRestart}
        />
      </div>
    )
  } else {
    return (
      <div className='message'>
        <p>Turno de: <strong className={player}>{player}</strong></p>
      </div>
    )
  }
}
