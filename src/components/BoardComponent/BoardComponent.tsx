import CellComponent from '../CellComponent/CellComponent';

import { Board } from '../../models/Board';

import './board.css';

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent = ({ board, setBoard }: BoardProps) => {
	const renderBoard = (board: Board) =>
		board.cells.map((row, index) =>
			row.map((cell) => <CellComponent cell={cell} key={cell.id} />)
		);

	return <div className="board">{renderBoard(board)}</div>;
};

export default BoardComponent;
