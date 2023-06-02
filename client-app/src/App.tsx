import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [activities, setActivities] = useState<any>([]);
	useEffect(() => {
		axios.get("http://localhost:5000/api/activities").then((response) => {
			console.log(response);
			setActivities(response.data);
		});
	}, []);

	return (
		<>
			<ul>
				{activities.map((activity: any) => (
					<li key={activity.id}>{activity.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;
