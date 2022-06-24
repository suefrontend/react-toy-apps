import { useState } from 'react';
import '../../App.css';
import './style.css';
import BubbleItem from './BubbleItem';

const BubbleList = () => {
	const [numOfBubbles, setNumOfBubbles] = useState(12);
	const [popped, setPopped] = useState(0);
	const [message, setMessage] = useState('Restore');

	let rows = [];

	for (let i = 0; i < numOfBubbles; i++) {
		rows.push(<BubbleItem />);
	}

	console.log('numOfBubbles', numOfBubbles);
	console.log('popped', popped);

	const clickItem = (e) => {
		e.target.style.opacity = '0';
		setPopped(popped + 1);
		if (popped === numOfBubbles) {
			setMessage('Restart');
		}
	};
	const init = () => {
		// Change all <Bubble /> opacity to 1
	};

	return (
		<>
			<ul className='bubble' onClick={clickItem}>
				{rows}
			</ul>
			<button className='btn'>{message}</button>
		</>
	);
};

export default BubbleList;
