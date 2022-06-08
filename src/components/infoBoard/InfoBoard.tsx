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
			<Timer
				restartGame={restartGame}
				currentPlayer={currentPlayer}
				initialSecondsAmount={180}
			/>
		</div>
	);
};

export default InfoBoard;
