import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Header, List } from "semantic-ui-react";
import "./App.css";

function App() {
	const [activities, setActivities] = useState<any>([]);
	useEffect(() => {
		axios.get("http://localhost:5000/api/activities").then((response) => {
			// console.log(response);
			setActivities(response.data);
		});
	}, []);

	return (
		<>
			<Header as="h2" icon="users" content="Reactivities" />
			<List>
				{activities.map((activity: any) => (
					<List.Item key={activity.id}>{activity.title}</List.Item>
				))}
			</List>
		</>
	);
}

export default App;
