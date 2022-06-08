import { useEffect, useRef, useState } from 'react';

import './timer.css';
import { Player } from '../../models/Player';

interface TimerProps {
	currentPlayer: Player | null;
	initialSecondsAmount: number;
	restartGame: () => void;
}

const Timer = ({
	initialSecondsAmount,
	currentPlayer,
	restartGame,
}: TimerProps) => {
	const [time, setTime] = useState(initialSecondsAmount);

	const timer = useRef<null | ReturnType<typeof setInterval>>(null);

	const getMin = (time: number) => Math.floor(time / 60);
	const getSec = (time: number) => Math.round(time % 60);
	const decreaseTime = (setState: typeof setTime) => {
		setState((state) => state - 1);
	};

	const startTimer = () => {
		if (timer.current) {
			setTime(initialSecondsAmount);
			clearInterval(timer.current);
		}

		let time = initialSecondsAmount;

		timer.current = setInterval(() => {
			if (time === 0 && timer.current) {
				clearInterval(timer.current);
			} else {
				decreaseTime(setTime);
				time--;
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
	}, [currentPlayer]);

	const handleClick = () => {
		restartGame();
		startTimer();
	};

	return (
		<div className="timer">
			<div className="timer__time">
				Осталось: {getMin(time)}:
				{getSec(time) % 60 < 10 ? '0' + getSec(time) : getSec(time)}
			</div>
			<button className="info-board__btn" onClick={handleClick}>
				reset
			</button>
		</div>
	);
};

export default Timer;
