import { Box, Stack } from '@mui/material';
import React from 'react';
import FamilyDetails from './components/FamilyDetails';
import FamilyTree from './components/FamilyTree';
import Toolbar from './components/Toolbar';

function App() {
	return (
		<>
			<Stack direction='row' spacing={2} sx={{ p: 5 }}>
				<Stack direction='column' spacing={2} sx={{ width: '30%' }}>
					<Box sx={{ height: '70%', border: '1px solid', borderRadius: 5 }}>
						<FamilyTree />
					</Box>

					<Toolbar />
				</Stack>
				<Box
					sx={{
						width: '70%',
						border: '1px solid',
						borderRadius: 5,
						overflow: 'hidden',
					}}
				>
					<FamilyDetails />
				</Box>
			</Stack>
		</>
	);
}

export default App;
