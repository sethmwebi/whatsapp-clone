import { View, Text, FlatList } from 'react-native'
import chats from "../../assets/data/chats.json"
import ChatListItem from "../components/ChatListItem"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

const ChatsScreen = () => {
	return (
		<FlatList data={chats} renderItem={({ item }) => <ChatListItem chat={item} />}/>
	)
}

export default ChatsScreen