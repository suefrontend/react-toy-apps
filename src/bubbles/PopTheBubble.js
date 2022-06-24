import '../App.css';
import BubbleList from './components/BubbleList';

const PopTheBubble = () => {
	return (
		<div className='container'>
			<div className='title'>
				<h2 className='title__heading'>Pop the bubble</h2>
				<p className='title__text'>Click on any bubble to pop!</p>
			</div>
			<BubbleList />
		</div>
	);
};
export default PopTheBubble;
