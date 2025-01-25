import { H2, ListItem, YGroup, YStack } from "tamagui";
import { useGetChatRooms } from "@/hooks/queries/chats";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Rooms() {
  const { rooms } = useGetChatRooms();
  // 現在のpathを取得

  return (
    <YStack flex={1} padding="$2" gap="$2">
      <H2>Rooms</H2>
      <YGroup size="$5">
        {rooms?.map((room) => (
          <YGroup.Item key={room.id}>
            <Link href={`/${room.id}`} asChild>
              <ListItem
                hoverTheme
                pressTheme
                title={room.name}
                iconAfter={<FontAwesome name="chevron-right" />}
              />
            </Link>
          </YGroup.Item>
        ))}
      </YGroup>
    </YStack>
  );
}
