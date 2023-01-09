import React, { useContext, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Box, Typography } from '@mui/material';
import { AppContext } from '../context/AppContext';
import { findObject } from '../config/Helper';

const FamilyTree = () => {
	const { selectedMember, setSelectedMember, familyData, setFamilyData } =
		useContext(AppContext);

	const handleSelect = (event, nodeIds) => {
		if (nodeIds === familyData.id) {
			setSelectedMember(familyData);
		}
		if (nodeIds !== familyData.id) {
			const member = findObject(familyData.children, nodeIds);
			setSelectedMember(member);
		}
	};

	const renderTree = (nodes) => (
		<TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</TreeItem>
	);

	console.log(familyData);

	return (
		<Box sx={{ height: '100%' }}>
			<Typography
				sx={{
					textAlign: 'center',
					borderBottom: '1px solid #005368',
					color: '#005368',
					fontWeight: 'bold',
					py: 1,
				}}
			>
				Family Tree
			</Typography>
			{!familyData ? (
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
				<TreeView
					aria-label='rich object'
					defaultCollapseIcon={<ExpandMoreIcon />}
					defaultExpanded={['root']}
					defaultExpandIcon={<ChevronRightIcon />}
					onNodeSelect={handleSelect}
					sx={{ width: 360, p: 2 }}
				>
					{renderTree(familyData)}
				</TreeView>
			)}
		</Box>
	);
};

export default FamilyTree;
