import React, { useState } from "react";
import "./../styles/App.css";
import ListItems from "./ListItems";

const tabFirst = [
	{
		id: 1,
		title: "Tab 1",
	},
	{
		id: 2,
		title: "Tab 2",
	},
	{
		id: 3,
		title: "Tab 3",
	},
];

const tabSecond = [
	{
		id: 1,
		title: "Tab A",
	},
	{
		id: 2,
		title: "Tab B",
	},
	{
		id: 3,
		title: "Tab C",
	},
];

const App = () => {
	const [select1, setSelect1] = useState(0);
	const [select2, setSelect2] = useState(0);

	return (
		<div>
			{/* Do not remove the main div */}
			{tabFirst.map((item) => (
				<ListItems item={item} action={setSelect1} />
			))}
			<p>Content for {tabFirst[select1].title}</p>

			{tabSecond.map((item) => (
				<ListItems item={item} action={setSelect2} />
			))}
			<p>Content for {tabSecond[select2].title}</p>
		</div>
	);
};

export default App;
