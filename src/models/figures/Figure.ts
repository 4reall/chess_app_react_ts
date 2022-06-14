import logo from '../../assets/images/black/bishop.svg';

import { Colors } from '../Colors';
import { Cell } from '../Cell';

export enum FigureNames {
	FIGURE = 'Figure',
	KING = 'King',
	QUEEN = 'Queen',
	ROOK = 'Rook',
	BISHOP = 'Bishop',
	KNIGHT = 'Knight',
	PAWN = 'Pawn',
}

export class Figure {
	color: Colors;
	logo: typeof logo | null;
	cell: Cell;
	name: FigureNames;
	isAttacked: boolean;
	id: number;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.name = FigureNames.FIGURE;
		this.logo = null;
		this.isAttacked = false;
		this.id = Math.random();
	}

	canMove(target: Cell): boolean {
		if (target.figure?.color === this.color) return false;
		if (target.figure?.name === FigureNames.KING) return false;
		return true;
	}
	moveFigure(target: Cell) {}
}
