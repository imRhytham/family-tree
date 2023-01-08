import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { AppContext } from '../context/AppContext';

const FamilyTree = () => {
	const { familyData, setFamilyData } = useContext(AppContext);
	console.log('familyData', familyData);
	const [expanded, setExpanded] = useState([]);
	const [selected, setSelected] = useState([]);

	const handleToggle = (event, nodeIds) => {
		setExpanded(nodeIds);
	};

	const handleSelect = (event, nodeIds) => {
		setSelected(nodeIds);
	};

	const handleExpandClick = () => {
		setExpanded((oldExpanded) =>
			oldExpanded.length === 0 ? ['1', '5', '6', '7'] : []
		);
	};

	const handleSelectClick = () => {
		setSelected((oldSelected) =>
			oldSelected.length === 0
				? ['1', '2', '3', '4', '5', '6', '7', '8', '9']
				: []
		);
	};
	console.log(!familyData);

	return (
		<Box sx={{ height: '100%', p: 2 }}>
			{!familyData ? (
				<h1>No Family Tree, Pls Add the Tree</h1>
			) : (
				<>
					<Box sx={{ mb: 1 }}>
						<Button onClick={handleExpandClick}>
							{expanded.length === 0 ? 'Expand all' : 'Collapse all'}
						</Button>
						<Button onClick={handleSelectClick}>
							{selected.length === 0 ? 'Select all' : 'Unselect all'}
						</Button>
					</Box>
					<TreeView
						aria-label='controlled'
						defaultCollapseIcon={<ExpandMoreIcon />}
						defaultExpandIcon={<ChevronRightIcon />}
						expanded={expanded}
						selected={selected}
						onNodeToggle={handleToggle}
						onNodeSelect={handleSelect}
						multiSelect
					>
						<TreeItem nodeId='1' label={familyData.name}>
							<TreeItem nodeId='2' label='Calendar' />
							<TreeItem nodeId='3' label='Chrome' />
							<TreeItem nodeId='4' label='Webstorm' />
						</TreeItem>
						<TreeItem nodeId='5' label='Documents'>
							<TreeItem nodeId='6' label='MUI'>
								<TreeItem nodeId='7' label='src'>
									<TreeItem nodeId='8' label='index.js' />
									<TreeItem nodeId='9' label='tree-view.js' />
								</TreeItem>
							</TreeItem>
						</TreeItem>
					</TreeView>
				</>
			)}
		</Box>
	);
};

export default FamilyTree;
