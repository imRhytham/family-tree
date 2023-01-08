import React, { useContext, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Box } from '@mui/material';
import { AppContext } from '../context/AppContext';

const FamilyTree = () => {
	const { selectedMember, setSelectedMember, familyData, setFamilyData } =
		useContext(AppContext);

	const handleSelect = (event, nodeIds) => {
		setSelectedMember(nodeIds);
		console.log(nodeIds);
	};

	const renderTree = (nodes) => (
		<TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</TreeItem>
	);

	return (
		<Box sx={{ height: '100%', p: 2 }}>
			<TreeView
				aria-label='rich object'
				defaultCollapseIcon={<ExpandMoreIcon />}
				defaultExpanded={['root']}
				defaultExpandIcon={<ChevronRightIcon />}
				onNodeSelect={handleSelect}
				sx={{ width: 360 }}
			>
				{renderTree(familyData)}
			</TreeView>
		</Box>
	);
};

export default FamilyTree;
