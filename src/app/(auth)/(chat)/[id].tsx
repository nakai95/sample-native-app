import { useSession } from "@/context/auth";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Platform } from "react-native";
import {
  Avatar,
  Button,
  getTokens,
  H2,
  Input,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

type Message = { id: string; name: string; message: string };

const LOCALHOST = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";

export default function Room() {
  const { id } = useLocalSearchParams();
  const { goBack } = useNavigation();
  const { size } = getTokens();
  const { username } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const socketRef = useRef<WebSocket>();
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = new WebSocket(`ws://${LOCALHOST}:8080/ws/${id}`);
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (socketRef.current) {
      const message = { id: username, name: username, message: input };
      socketRef.current.send(JSON.stringify(message));
      setInput("");
    }
  };
  return (
    <YStack flex={1} padding="$2" gap="$2">
      <XStack alignItems="center">
        <Button
          circular
          chromeless
          onPress={goBack}
          icon={<Ionicons name="chevron-back" size={size.$3.val} />}
        />
        <H2>Chat</H2>
      </XStack>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          item.id === username ? (
            <MyMessage {...item} />
          ) : (
            <TheirMessage {...item} />
          )
        }
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <XStack gap="$2">
        <View flex={1}>
          <Input
            value={input}
            onChangeText={setInput}
            placeholder="Type a message"
          />
        </View>
        <Button
          theme="active"
          paddingLeft="$3.5"
          icon={<FontAwesome name="send" size={16} />}
          onPress={sendMessage}
        />
      </XStack>
    </YStack>
  );
}

function MyMessage({ message }: Message) {
  return (
    <XStack justifyContent="flex-end" gap="$2" marginBottom="$2">
      <XStack
        alignItems="center"
        paddingVertical="$2"
        paddingHorizontal="$3"
        borderRadius="$5"
        backgroundColor="$color6"
      >
        <Text>{message}</Text>
      </XStack>
    </XStack>
  );
}

function TheirMessage({ message }: Message) {
  return (
    <XStack gap="$2" marginBottom="$2">
      <Avatar circular size="$3">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="http://picsum.photos/200/300"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
      <XStack
        alignItems="center"
        paddingVertical="$2"
        paddingHorizontal="$3"
        borderRadius="$5"
        backgroundColor="$color1"
      >
        <Text>{message}</Text>
      </XStack>
    </XStack>
  );
}
