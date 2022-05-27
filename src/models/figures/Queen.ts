import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

// @ts-ignore
import blackQueen from '../../assets/images/black/queen.svg';
// @ts-ignore
import whiteQueen from '../../assets/images/white/queen.svg';
// const blackQueen = require('../../assets/images/black/queen.svg');
// const whiteQueen = require('../../assets/images/white/queen.svg');

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.QUEEN;
		this.logo = color === Colors.BLACK ? blackQueen : whiteQueen;
	}
}
