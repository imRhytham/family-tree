import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const FamilyDetails = () => {
	const { selectedMember } = useContext(AppContext);
	console.log(selectedMember);

	return (
		<Box sx={{ height: '100%', overflow: 'hidden' }}>
			<Typography
				sx={{
					textAlign: 'center',
					borderBottom: '1px solid #005368',
					color: '#005368',
					fontWeight: 'bold',
					py: 1,
					overflow: 'hidden',
				}}
			>
				Family Details
			</Typography>
			{!selectedMember ? (
				<Typography
					sx={{
						textAlign: 'center',
						color: '#005368',
						fontWeight: 'bold',
						py: 1,
					}}
				>
					{' '}
					No Data{' '}
				</Typography>
			) : (
				<Box
					sx={{
						p: 2,
						overflow: 'auto',
					}}
				>
					<Typography sx={{ fontWeight: 'bold' }}>
						Name: {selectedMember.name} {selectedMember.familyName}
					</Typography>
					<Typography sx={{ fontWeight: 'bold' }}>
						Age: {selectedMember.age}
					</Typography>
					{selectedMember.spouseName !== '' && (
						<Typography sx={{ fontWeight: 'bold' }}>
							Spouse: {selectedMember.spouseName}
						</Typography>
					)}
					{selectedMember.children.length > 0 && (
						<Typography sx={{ fontWeight: 'bold' }}>
							Children:{' '}
							{selectedMember.children.map((child) => child.name).join(', ')}
						</Typography>
					)}
				</Box>
			)}
		</Box>
	);
};

export default FamilyDetails;
