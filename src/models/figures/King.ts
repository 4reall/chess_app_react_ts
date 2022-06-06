import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

// @ts-ignore
import blackKing from '../../assets/images/black/king.svg';
// @ts-ignore
import whiteKing from '../../assets/images/white/king.svg';

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.KING;
		this.logo = color === Colors.BLACK ? blackKing : whiteKing;
	}
	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (Math.abs(target.x - this.cell.x) > 1) return false;
		if (Math.abs(target.y - this.cell.y) > 1) return false;
		return true;
		return true;
	}
}
