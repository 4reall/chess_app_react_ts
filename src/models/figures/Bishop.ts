import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

// @ts-ignore
import blackBishop from '../../assets/images/black/bishop.svg';
// @ts-ignore
import whiteBishop from '../../assets/images/white/bishop.svg';

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.BISHOP;
		this.logo = color === Colors.BLACK ? blackBishop : whiteBishop;
	}
	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (!this.cell.isEmptyDiagonal(target)) return false;
		return true;
	}
}
