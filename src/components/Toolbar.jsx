import React, { useContext, useState } from 'react';
import { Button, Grid } from '@mui/material';
import AddModal from './AddModal';
import ImportExportModal from './ImportExportModal';
import { AppContext } from '../context/AppContext';

const Toolbar = () => {
	const [open, setOpen] = useState(false);
	const [openImportExport, setOpenImportExport] = useState(false);
	const [title, setTitle] = useState('');
	const { familyData } = useContext(AppContext);
	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
				<Grid item xs={6}>
					<Button
						variant='contained'
						onClick={() => {
							setTitle('Import Json');
							setOpenImportExport(true);
						}}
					>
						Import Json
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant='contained' onClick={() => setOpen(true)}>
						Add Family
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						variant='contained'
						onClick={() => {
							setTitle('Export Json');
							setOpenImportExport(true);
						}}
						disabled={!familyData}
					>
						Export Json
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant='contained' disabled={!familyData}>
						Print Family Tree
					</Button>
				</Grid>
			</Grid>
			{open && <AddModal open={open} setOpen={setOpen} />}
			{openImportExport && (
				<ImportExportModal
					open={openImportExport}
					setOpen={setOpenImportExport}
					title={title}
				/>
			)}
		</>
	);
};

export default Toolbar;
