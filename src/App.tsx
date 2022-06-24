import { FC } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App: FC = () => {
	return (
		<div className='container'>
			<h2>My React Toy Apps</h2>
			<ul>
				<li>
					<Link to='/pop-the-bubble'>Pop the bubble</Link>
				</li>
			</ul>
		</div>
	);
};

export default App;
