import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [familyData, setFamilyData] = useState(null);
	const [data, setData] = useState({
		id: '',
		name: '',
		familyName: '',
		age: '',
		spouseName: '',
		children: [],
	});
	const [isEdit, setIsEdit] = useState(false);
	const [isAdd, setIsAdd] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [isView, setIsView] = useState(false);

	return (
		<AppContext.Provider
			value={{
				familyData,
				setFamilyData,
				isEdit,
				setIsEdit,
				isAdd,
				setIsAdd,
				isDelete,
				setIsDelete,
				isView,
				setIsView,
				data,
				setData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
