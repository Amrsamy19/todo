import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Task = (props) => {
	return (
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.square}></View>
				<Text style={styles.itemText}>{props.text}</Text>
			</View>
			<View style={styles.circular}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#FFF",
		padding: 15,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	itemLeft: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
	},
	square: {
		width: 26,
		height: 26,
		backgroundColor: "#55BCF6",
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15,
	},
	itemText: {
		fontSize: 18,
		maxWidth: "80%",
	},
	circular: {
		width: 15,
		height: 15,
		borderColor: "#55BCF6",
		borderWidth: 2,
		borderRadius: 5,
	},
});
