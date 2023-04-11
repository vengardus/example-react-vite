export const Square = ({ index, board, handleClick }) => {
  const squareClass = board[index] ? `square ${board[index]}` : 'square'
  return (
    <div
      className={squareClass}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </div>
  )
}
