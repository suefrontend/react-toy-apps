import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
// import PopTheBubble from './bubbles/PopTheBubble';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			{/* <Route path='/pop-the-bubble' element={<PopTheBubble />} /> */}
		</Routes>
	</BrowserRouter>
);
