import { useEffect, useState } from 'react';

import CellComponent from '../CellComponent/CellComponent';
import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';

import './board.css';

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent = ({ board, setBoard }: BoardProps) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	useEffect(() => {
		highlightCell();
	}, [selectedCell]);

	const onClick = (cell: Cell) => {
		if (cell.isEmpty() && !selectedCell?.figure?.canMove(cell)) return;
		if (selectedCell === cell) {
			setSelectedCell(null);
			highlightCell();
			return;
		}
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
		} else {
			setSelectedCell(cell);
		}
	};

	const isSelected = (currentCell: Cell, cell: Cell | null): boolean => {
		return currentCell.x === cell?.x && currentCell.y === cell?.y;
	};

	const highlightCell = () => {
		board.highlightCell(selectedCell);
		updateBoard();
	};

	const updateBoard = () => {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	};

	const renderBoard = (board: Board) =>
		board.cells.map((row, index) =>
			row.map((cell) => (
				<CellComponent
					onClick={onClick}
					selected={isSelected(cell, selectedCell)}
					cell={cell}
					key={cell.id}
				/>
			))
		);

	return <div className="board">{renderBoard(board)}</div>;
};

export default BoardComponent;
