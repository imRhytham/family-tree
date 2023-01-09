// export const findObject = (obj, id) => findObjectAux([obj], id);
export const findObject = (arr, id) => {
	for (const obj of arr) {
		if (obj.id === id) return obj;
		const nestedObj = findObject(obj.children, id);
		if (nestedObj) return nestedObj;
	}
};
