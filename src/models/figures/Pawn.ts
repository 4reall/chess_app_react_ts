import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

// @ts-ignore
import blackPawn from '../../assets/images/black/pawn.svg';
// @ts-ignore
import whitePawn from '../../assets/images/white/pawn.svg';

export class Pawn extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.PAWN;
		this.logo = color === Colors.BLACK ? blackPawn : whitePawn;
	}

	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		return true;
	}
}
