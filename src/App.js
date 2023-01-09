import React from 'react';
import { Box, Stack } from '@mui/material';
import FamilyDetails from './components/FamilyDetails';
import FamilyTree from './components/FamilyTree';
import Toolbar from './components/Toolbar';

const data = {
	id: 1,
	name: 'KantiBhai',
	familyName: 'Patel',
	age: 85,
	spouseName: 'Geetaben Patel',
	address: '302Shikhar Residency',
	children: [
		{
			id: 2,
			name: 'Alpa',
			familyName: 'Patel',
			age: 53,
			spouseName: 'Ajay',
			address: '304 Suramya Residency',
			children: [
				{
					id: 3,
					name: 'Swapnil',
					familyName: 'Patel',
					age: 35,
					spouseName: 'Dhwani',
					address: '304 Suramya Residency',
					children: [
						{
							id: 4,
							name: 'Veda',
							familyName: 'Patel',
							age: 5,
							spouseName: '',
							address: '304 Suramya Residency',
							children: [],
						},
						{
							id: 5,
							name: 'Jhanav',
							familyName: 'Patel',
							age: 3,
							spouseName: '',
							address: '304 Suramya Residency',
							children: [],
						},
					],
				},

				{
					id: 6,
					name: 'Meghna',
					familyName: 'Patel',
					age: 30,
					spouseName: 'Hardik',
					address: '304 Suramya Residency',
					children: [
						{
							id: 7,
							name: 'Viyansh',
							familyName: 'Patel',
							age: 3,
							spouseName: '',
							address: '304 Suramya Residency',
							children: [],
						},
					],
				},
			],
		},
		{
			id: 8,
			name: 'Rohit',
			familyName: 'Patel',
			age: 50,
			spouseName: 'Twinkle Patel',
			address: '302 Shikhar Residency',
			children: [
				{
					id: 9,
					name: 'Rhytham',
					familyName: 'Patel',
					age: 23,
					spouseName: '',
					address: '302 Shikhar Residency',
					children: [],
				},
			],
		},
		{
			id: 10,
			name: 'Vidhuta',
			familyName: 'Patel',
			age: 47,
			spouseName: 'Bharat',
			address: 'Citylight',
			children: [
				{
					id: 11,
					name: 'Kruanl',
					familyName: 'Patel',
					age: 22,
					spouseName: '',
					address: 'Citylight',
					children: [],
				},
			],
		},
	],
};

function App() {
	console.log(data);
	return (
		<>
			<Stack direction='row' spacing={2} sx={{ p: 5 }}>
				<Stack direction='column' spacing={2} sx={{ width: '30%' }}>
					<Box sx={{ height: '90%', border: '1px solid', borderRadius: 5 }}>
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
