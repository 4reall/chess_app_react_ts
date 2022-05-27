import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

// @ts-ignore
import blackRook from '../../assets/images/black/rook.svg';
// @ts-ignore
import whiteRook from '../../assets/images/white/rook.svg';

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.KNIGHT;
		this.logo = color === Colors.BLACK ? blackRook : whiteRook;
	}
	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (this.cell.isEmptyVertical(target)) return true;
		if (this.cell.isEmptyHorizontal(target)) return true;
		return false;
	}
}
