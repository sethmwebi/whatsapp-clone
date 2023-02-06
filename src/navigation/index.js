import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text } from 'react-native'
import ChatScreen from "../screens/ChatScreen"
import ChatsScreen from "../screens/ChatsScreen"
import ContactsScreen from "../screens/ContactsScreen"
import MainTabNavigator from "./MainTabNavigator"

const Stack = createNativeStackNavigator()

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "whitesmoke"}}}>
				<Stack.Screen name="Home" options={{headerShown: false}} component={MainTabNavigator} />
				<Stack.Screen name="Chats" component={ChatsScreen}/>
				<Stack.Screen name="Chat" component={ChatScreen}/>
				<Stack.Screen name="Contacts" component={ContactsScreen}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator