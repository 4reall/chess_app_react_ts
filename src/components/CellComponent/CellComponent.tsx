import React from 'react';

import './cell.css';
import { Cell } from '../../models/Cell';

interface CellProps {
	cell: Cell;
	selected: boolean;
	onClick: (cell: Cell) => void;
}

const CellComponent = ({ cell, selected, onClick }: CellProps) => {
	const attackedClass = cell.figure && cell.available ? 'attacked' : null;
	const selectedClass = selected ? 'selected' : null;
	const classes = ['cell', cell.color, selectedClass, attackedClass].join(
		' '
	);

	const availableClass =
		!cell.figure && cell.available ? <div className={'available'} /> : null;

	const figureLogo = cell.figure?.logo && (
		<img draggable={false} src={cell.figure.logo} alt={'figure'} />
	);

	return (
		<div onClick={() => onClick(cell)} className={classes}>
			{availableClass}
			{figureLogo}
		</div>
	);
};

export default CellComponent;
