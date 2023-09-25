import { useSelector } from 'react-redux';
import './score-board.css';

export function ScoreBoard(){
    const playerScore = useSelector(state => state.game.playerScore);
    const botScore = useSelector(state => state.game.botScore);

    return(
        <div className="score-board">
            <h3 className="score-board--title">PONTUAÇÃO</h3>
            <h2 className="score-board--score">
              {`${playerScore} x ${botScore}`}  
            </h2>   
        </div>
    )
}