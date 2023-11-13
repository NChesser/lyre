/*
	About: App Container
*/

import React from 'react';

// * Styling
import './App.css';

// * Routing
import { BrowserRouter } from 'react-router-dom';

// * Material-UI Components
import { Box } from '@mui/material';

// * My Components
import TitleBar from './components/TitleBar';
import AppRoutes from './routing/AppRoutes';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<TitleBar />
				<Box sx={{ mr: 50, ml: 50, mt: 5, mb: 5, alignContent: 'center' }}>
					<AppRoutes />
				</Box>
			</BrowserRouter>
		</div>
	);
}

export default App;
