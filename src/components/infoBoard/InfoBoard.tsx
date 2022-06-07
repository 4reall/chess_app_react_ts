import './infoBoard.css';
import { Player } from '../../models/Player';
import { Colors } from '../../models/Colors';
import Timer from '../Timer/Timer';

interface InfoBoardProps {
	currentPlayer: Player | null;
	restartGame: () => void;
}

const InfoBoard = ({ restartGame, currentPlayer }: InfoBoardProps) => {
	const color =
		currentPlayer?.color === Colors.WHITE ? 'white-player' : 'black-player';
	return (
		<div className="info-board">
			<div className="info-board__player">
				<div className="info-board__text">Ходит:</div>
				<div className={`info-board__color ${color}`}></div>
			</div>
			<Timer initialSecondsAmount={180} />
			<button className="info-board__btn" onClick={restartGame}>
				reset
			</button>
		</div>
	);
};

export default InfoBoard;
