import { useSession } from "@/context/auth";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Button, getTokens, H2, XStack, YStack } from "tamagui";

export default function Profile() {
  const { goBack } = useNavigation();
  const { signOut } = useSession();
  const { size } = getTokens();
  return (
    <YStack flex={1} padding="$2" gap="$2">
      <XStack>
        <Button
          circular
          chromeless
          onPress={goBack}
          icon={<Ionicons name="chevron-back" size={size.$3.val} />}
        />
      </XStack>
      <H2>Profile</H2>
      <Button onPress={signOut}>Sign Out</Button>
    </YStack>
  );
}
