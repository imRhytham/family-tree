import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import AddModal from './AddModal';

const Toolbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
				<Grid item xs={6}>
					<Button variant='contained'>Import Json</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant='contained' onClick={() => setOpen(true)}>
						Add Family
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant='contained'>Export Json</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant='contained'>Print Family Tree</Button>
				</Grid>
			</Grid>
			<AddModal open={open} setOpen={setOpen} />
		</>
	);
};

export default Toolbar;
