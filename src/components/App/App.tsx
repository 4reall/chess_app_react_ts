import './app.css';
import BoardComponent from '../BoardComponent/BoardComponent';
import React, { useEffect, useState } from 'react';
import { Board } from '../../models/Board';
import CellComponent from '../CellComponent/CellComponent';

function App() {
	const [board, setBoard] = useState(new Board());

	useEffect(() => {
		restartGame();
	}, []);

	const restartGame = () => {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigure();
		setBoard(newBoard);
	};

	return (
		<div className="app">
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	);
}

export default App;
