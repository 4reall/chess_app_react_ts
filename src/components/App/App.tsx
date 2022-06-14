import './app.css';
import BoardComponent from '../BoardComponent/BoardComponent';
import React, { useEffect, useState } from 'react';
import { Board } from '../../models/Board';
import { Player } from '../../models/Player';
import { Colors } from '../../models/Colors';
import InfoBoard from '../infoBoard/InfoBoard';
import FigureList from '../FigureList/FigureList';
import Modal from '../Modal/Modal';

function App() {
	const [board, setBoard] = useState(new Board());
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
	const [isCheck, setIsCheck] = useState(false);

	useEffect(() => {
		restartGame();
		setCurrentPlayer(whitePlayer);
	}, []);

	const restartGame = () => {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigure();
		setCurrentPlayer(whitePlayer);
		setBoard(newBoard);
	};

	const swapPlayer = () => {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		);
	};

	return (
		<div className="app">
			{isCheck && <Modal />}
			<InfoBoard
				currentPlayer={currentPlayer}
				restartGame={restartGame}
			/>
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>
			<div className="figures">
				<FigureList
					title="Черные"
					lostFigures={board.lostWhiteFigures}
				/>
				<FigureList
					title="Белые"
					lostFigures={board.lostBlackFigures}
				/>
			</div>
		</div>
	);
}

export default App;
