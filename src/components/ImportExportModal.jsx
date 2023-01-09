import React, { useContext, useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { AppContext } from '../context/AppContext';

const ImportExportModal = ({ open, setOpen, title }) => {
	const [json, setJson] = useState('');
	const { setFamilyData, familyData } = useContext(AppContext);

	const handleChange = (e) => {
		const fileReader = new FileReader();
		fileReader.readAsText(e.target.files[0], 'UTF-8');
		fileReader.onload = (e) => {
			setJson(JSON.parse(e.target.result));
		};
	};

	const handleSubmit = () => {
		if (title === 'Import Json') {
			setFamilyData(json);
			setOpen(false);
		} else {
			setJson(JSON.stringify(familyData));
			navigator.clipboard.writeText(familyData);
			window.alert('Copied to clipboard');
			setOpen(false);
		}
	};

	return (
		<div>
			<Dialog open={open}>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<Grid container spacing={2} sx={{ p: 2 }}>
						<Grid item xs={12}>
							{title === 'Import Json' ? (
								<>
									<input type='file' accept='.json' onChange={handleChange} />
								</>
							) : (
								<>
									<Typography>{JSON.stringify(familyData)}</Typography>
								</>
							)}
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button variant='contained' onClick={handleSubmit}>
						{title}
					</Button>
					<Button
						onClick={() => {
							setOpen(false);
						}}
					>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ImportExportModal;
