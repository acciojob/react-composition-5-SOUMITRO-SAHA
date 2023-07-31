import React from "react";

const ListItems = ({ item, action }) => {
	return (
		<li key={item.id} onClick={() => action(item.id - 1)}>
			{item.title}
		</li>
	);
};

export default ListItems;
