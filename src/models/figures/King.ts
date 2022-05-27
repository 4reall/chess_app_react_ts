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
}
