import { Square } from "./Square";


export const Board = ({ board, handleClick }) => {
  return (
    <div className="board">
      <div className="row">
        {
          [0, 1, 2].map(index => (
            <Square key={index} index={index} board={board} handleClick={handleClick} />
          ))
        }
      </div>
      <div className="row">
        {
          [3, 4, 5].map(index => (
            <Square key={index} index={index} board={board} handleClick={handleClick} />
          ))
        }
      </div>
      <div className="row">
        {
          [6, 7, 8].map(index => (
            <Square key={index} index={index} board={board} handleClick={handleClick} />
          ))
        }
      </div>
    </div>
  );
};