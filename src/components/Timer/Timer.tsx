import { useEffect, useState } from 'react';

import './timer.css';
import { stat } from 'fs';

interface TimerProps {
	initialSecondsAmount: number;
}

const Timer = ({ initialSecondsAmount }: TimerProps) => {
	const [minutes, setMinutes] = useState(
		Math.floor(initialSecondsAmount / 60)
	);
	const [seconds, setSeconds] = useState(
		Math.round(initialSecondsAmount % 60)
	);
	useEffect(() => {
		// const minutesId = setInterval(() => {
		// 	setMinutes((state) => state - 1);
		// }, 60000);
		// const secondsId = setInterval(() => {
		// 	console.log(seconds);
		// 	if (seconds < 0) {
		// 		console.log('123');
		// 		setMinutes((state) => state - 1);
		// 		setSeconds(60);
		// 	}
		// 	setSeconds((state) => state - 1);
		// }, 1000);
	}, []);
	return (
		<div className="timer">
			<div className="timer__time">
				Осталось: {minutes}:{seconds < 10 ? seconds + '0' : seconds}
			</div>
		</div>
	);
};

export default Timer;
