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
import { findObject } from '../config/Helper';

const AddModal = ({ open, setOpen }) => {
	const { data, setData, setFamilyData, selectedMember, familyData } =
		useContext(AppContext);

	const handleClose = () => {
		setOpen(false);
		setData({
			id: null,
			name: '',
			familyName: '',
			spouseName: '',
			age: '',
		});
	};

	const handleSave = () => {
		const body = {
			id: uuidv4(),
			name: data.name,
			familyName: data.familyName,
			spouseName: data.spouseName,
			age: data.age,
			children: [],
		};
		if (!familyData) {
			setFamilyData(body);
		}
		if (familyData?.children.length === 0) {
			const child = familyData.children.concat(body);
			setFamilyData({ ...familyData, children: child });
			// setFamilyData({familyData});
		}
		if (familyData?.children.length > 0) {
			if (selectedMember === familyData.id) {
				const child = familyData.children.push(body);
				setFamilyData({ ...familyData, children: child });
				setOpen(false);
				setData({
					id: null,
					name: '',
					familyName: '',
					spouseName: '',
					age: '',
				});
			}
			const obj = findObject(familyData.children, selectedMember.id);
			console.log(obj);
			if (obj) {
				if (obj.children.length > 0) {
					obj.children.push(body);
				}
				if (obj.children.length === 0) {
					obj.children = [body];
				}
				//const child = obj.children.concat(data);
				//console.log(child);
				//setFamilyData({ ...familyData, children: obj });
				// setFamilyData(familyData);
			}
		}
		console.log(familyData);

		setOpen(false);
		setData({
			id: null,
			name: '',
			familyName: '',
			spouseName: '',
			age: '',
		});
	};
	// console.log(data);

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
						<Grid item xs={4}>
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
						<Grid item xs={8}>
							<TextField
								autoFocus
								margin='dense'
								id='address'
								label='Address'
								type='text'
								value={data.address}
								onChange={(e) => setData({ ...data, address: e.target.value })}
								variant='standard'
								fullWidth
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
