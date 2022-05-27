import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

// @ts-ignore
import blackKnight from '../../assets/images/black/knight.svg';
// @ts-ignore
import whiteKnight from '../../assets/images/white/knight.svg';

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.KNIGHT;
		this.logo = color === Colors.BLACK ? blackKnight : whiteKnight;
	}
	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		const dx = Math.abs(this.cell.x - target.x);
		const dy = Math.abs(this.cell.y - target.y);
		return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
	}
}
