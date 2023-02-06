import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	FlatList,
	KeyboardAvoidingView,
} from "react-native";
import { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";

const ChatScreen = () => {
	const route = useRoute();
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({ title: route.params.name });
	}, [route.params.name]);
	
	return (
		<KeyboardAvoidingView
			style={styles.bg}
		>
			<ImageBackground source={bg} style={styles.bg}>
				<FlatList
					data={messages}
					renderItem={({ item }) => (
						<Message message={item} style={styles.list} />
					)}
					inverted
				/>
				<InputBox />
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({
	bg: {
		flex: 1,
	},
	list: {
		padding: 10,
	},
});
