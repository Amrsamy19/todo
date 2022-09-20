import { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Task } from "./components/Task";

export default function App() {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);

	const handleSubmit = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]);
		setTask(null);
	};

	const completeTask = (index) => {
		let copyItems = [...taskItems];

		copyItems.splice(index, 1);
		setTaskItems(copyItems);
	};

	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				{/* Today's Tasks */}
				<Text style={styles.title}>Today's tasks</Text>
				<View style={styles.tasks}>
					{taskItems.map((task, index) => {
						return (
							<>
								<TouchableOpacity
									key={index}
									onPress={() => completeTask(index)}
								>
									<Task text={task} />
								</TouchableOpacity>
							</>
						);
					})}
				</View>
			</View>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.writeTaskWrapper}
			>
				<TextInput
					value={task}
					style={styles.input}
					onChangeText={(text) => setTask(text)}
					placeholder={"Write a new task"}
				/>
				<TouchableOpacity onPress={() => handleSubmit()}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E8EAED",
	},
	tasksWrapper: {
		padding: 80,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 34,
		marginBottom: 25,
		fontWeight: "bold",
	},
	writeTaskWrapper: {
		position: "absolute",
		bottom: 60,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: "#FFF",
		borderRadius: 60,
		borderColor: "#00000",
		borderWidth: 1,
		width: 250,
	},
	addWrapper: {
		flex: 1,
		width: 60,
		height: 60,
		backgroundColor: "#FFF",
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#000000",
		borderWidth: 1,
	},
	addText: {
		fontSize: 24,
	},
});
