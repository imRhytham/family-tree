import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [familyData, setFamilyData] = useState(null);
	const [data, setData] = useState({
		id: null,
		name: '',
		familyName: '',
		age: '',
		spouseName: '',
		address: '',
		children: [],
	});
	const [selectedMember, setSelectedMember] = useState(null);

	return (
		<AppContext.Provider
			value={{
				familyData,
				setFamilyData,
				data,
				setData,
				selectedMember,
				setSelectedMember,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
