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
}
