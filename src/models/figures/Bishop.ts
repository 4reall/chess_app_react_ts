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
}