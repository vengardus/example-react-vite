import React, { useState, useEffect } from 'react'
import './../../assets/css/tictactoe.css' // Archivo de estilos de Tailwind CSS
import { Board } from './Board'
import { TURN, WINNING_LINES } from './data'
import { Message } from './Message'

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(TURN.x)
  const [winner, setWinner] = useState(null)

  const checkWinner = () => {
    for (let i = 0; i < WINNING_LINES.length; i++) {
      const [a, b, c] = WINNING_LINES[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) { return board[a] }
    }
    return null
  }

  const isTie = () => {
    return !!(board.every(square => square !== null))
  }

  useEffect(() => {
    const theWinner = checkWinner()
    if (theWinner !== null) { setWinner(theWinner) }
  }, [board])

  const handleClick = (index) => {
    if (winner || board[index]) return

    const newBoard = [...board]
    newBoard[index] = player
    setBoard(newBoard)
    setPlayer(player === TURN.x ? TURN.o : TURN.x)
  }

  const handleRestart = () => {
    setBoard(Array(9).fill(null))
    setPlayer(TURN.x)
    setWinner(null)
  }

  return (
    <div className='tictactoe'>
      <h1 className='mb-1 text-4xl font-bold'>Tic Tac Toe</h1>
      <Board board={board} handleClick={handleClick} />
      <Message winner={winner} player={player} isTie={isTie} handleRestart={handleRestart} />
    </div>
  )
}
