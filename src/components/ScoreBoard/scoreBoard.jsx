import { useDispatch, useSelector } from 'react-redux';
import './score-board.css';
import { endGame } from '../../redux/gameSlice';

export function ScoreBoard(){
  
  const dispatch = useDispatch();

  const playerScore = useSelector(state => state.game.playerScore);
  const botScore = useSelector(state => state.game.botScore);

  playerScore == 12 && dispatch(endGame());
  botScore ==  12 && dispatch(endGame());

  return(
    <div className="score-board">
      <h3 className="score-board--title">PONTUAÇÃO</h3>
      <h2 className="score-board--score">
      {`${playerScore} x ${botScore}`}  
      </h2>   
    </div>
  )
}