import React from 'react';

import './cell.css';
import { Cell } from '../../models/Cell';

interface CellProps {
	cell: Cell;
}

const CellComponent = ({ cell }: CellProps) => {
	const classes: string = ['cell', cell.color].join(' ');

	const figureLogo = cell.figure?.logo && (
		<img src={cell.figure.logo} alt={'figure'} />
	);

	return <div className={classes}>{figureLogo}</div>;
};

export default CellComponent;
