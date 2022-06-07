import './figureList.css';
import { Figure } from '../../models/figures/Figure';

interface FigureListProps {
	title: string;
	lostFigures: Figure[];
}

const FigureList = ({ title, lostFigures }: FigureListProps) => {
	const list = lostFigures.map((figure, i) => (
		<li key={figure.id}>
			<img className="figures__img" src={figure.logo} alt={figure.name} />
		</li>
	));
	return (
		<div>
			<div className="figures__title">{title}:</div>
			<ul className="figures__block">{list}</ul>
		</div>
	);
};

export default FigureList;
