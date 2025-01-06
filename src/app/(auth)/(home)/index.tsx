import { Avatar, Button, H2, ScrollView, View, XStack, YStack } from "tamagui";
import { useNavigation } from "expo-router";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { FlatList } from "react-native";
import { EventCard } from "@/components/cards";
import { useGetEvents } from "@/hooks/queries/events";

type HomeDrawerParamList = {
  Index: undefined;
  Profile: undefined;
};

export default function Index() {
  const navigation = useNavigation<DrawerNavigationProp<HomeDrawerParamList>>();
  const { events } = useGetEvents();

  return (
    <YStack flex={1} padding="$2" gap="$2">
      <XStack gap="$2" alignItems="center">
        <Button
          circular
          size="$3"
          icon={
            <Avatar circular size="$3">
              <Avatar.Image
                accessibilityLabel="Cam"
                src="http://picsum.photos/200/300"
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
          }
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <Button size="$3" borderRadius="$8" themeInverse>
          All
        </Button>
        <Button size="$3" borderRadius="$8">
          Category
        </Button>
      </XStack>
      <ScrollView>
        <YStack flex={1} gap="$4">
          <YStack>
            <H2>Events</H2>
            <XStack>
              <FlatList
                horizontal
                data={events || []}
                renderItem={({ item }) => (
                  <View marginRight="$2">
                    <EventCard {...item} />
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </XStack>
          </YStack>
          <YStack>
            <H2>Recent</H2>
            <XStack>
              <FlatList
                horizontal
                data={events || []}
                renderItem={({ item }) => (
                  <View marginRight="$2">
                    <EventCard {...item} />
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </XStack>
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
