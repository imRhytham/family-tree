import React, { useContext } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	TextField,
} from '@mui/material';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddModal = ({ open, setOpen }) => {
	const { data, setData, setFamilyData } = useContext(AppContext);

	const handleClose = () => {
		setOpen(false);
		setData({
			id: '',
			name: '',
			familyName: '',
			spouseName: '',
			age: '',
		});
	};

	const handleSave = () => {
		if (!data?.id || data?.id === '') {
			setData({ ...data, id: uuidv4() });
			setFamilyData(data);
		}
		setOpen(false);
	};

	return (
		<div>
			<Dialog open={open}>
				<DialogTitle>
					{data?.id || data?.id === '' ? 'Add Family Data' : 'Edit Family Data'}
				</DialogTitle>
				<DialogContent>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
						<Grid item xs={4}>
							<TextField
								autoFocus
								margin='dense'
								id='name'
								label='Name'
								type='text'
								value={data.name}
								onChange={(e) => setData({ ...data, name: e.target.value })}
								variant='standard'
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								autoFocus
								margin='dense'
								id='familyName'
								label='Family Name'
								type='text'
								value={data.familyName}
								onChange={(e) =>
									setData({ ...data, familyName: e.target.value })
								}
								variant='standard'
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								autoFocus
								margin='dense'
								id='spouceName'
								label='Spouce Name'
								type='text'
								value={data.spouseName}
								onChange={(e) =>
									setData({ ...data, spouseName: e.target.value })
								}
								variant='standard'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoFocus
								margin='dense'
								id='age'
								label='Age'
								type='number'
								value={data.age}
								onChange={(e) => setData({ ...data, age: e.target.value })}
								variant='standard'
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSave}>Save</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddModal;
