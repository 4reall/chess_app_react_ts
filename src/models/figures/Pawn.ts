import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

// @ts-ignore
import blackPawn from '../../assets/images/black/pawn.svg';
// @ts-ignore
import whitePawn from '../../assets/images/white/pawn.svg';

export class Pawn extends Figure {
	isFirstStep = true;

	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.name = FigureNames.PAWN;
		this.logo = color === Colors.BLACK ? blackPawn : whitePawn;
	}

	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;

		const direction = this.color === Colors.BLACK ? -1 : 1;
		const firstStepDirection = this.color === Colors.BLACK ? -2 : 2;

		if (
			(this.cell.y === target.y + direction ||
				(this.isFirstStep &&
					this.cell.y === target.y + firstStepDirection)) &&
			this.cell.x === target.x &&
			this.cell.board.getCell(target.x, target.y).isEmpty() &&
			this.cell.board
				.getCell(this.cell.x, this.cell.y - direction)
				.isEmpty()
		) {
			return true;
		}

		if (
			this.cell.y === target.y + direction &&
			(this.cell.x === target.x + 1 || this.cell.x === target.x - 1) &&
			this.cell.isEnemy(target)
		)
			return true;
		return false;
	}

	moveFigure(target: Cell) {
		super.moveFigure(target);
		this.isFirstStep = false;
	}
}
