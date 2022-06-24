import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PopTheBubbleApp from './bubbles/PopTheBubble';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/pop-the-bubble' element={<PopTheBubbleApp />} />
		</Routes>
	</BrowserRouter>
);
