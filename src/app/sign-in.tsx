import { LoadingOverlay } from "@/components/loading";
import { useSession } from "@/context/auth";
import { Redirect } from "expo-router";
import { useCallback, useReducer } from "react";
import {
  Button,
  H2,
  Input,
  Label,
  Text,
  useTheme,
  XStack,
  YStack,
} from "tamagui";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignIn() {
  const theme = useTheme();
  const { session, isLoading, signIn } = useSession();
  const [userName, changeUserName] = useReducer(
    (_: string, value: string) => value,
    "demo1@example.com"
  );
  const [password, changePassword] = useReducer(
    (_: string, value: string) => value,
    "#demo1"
  );

  const handleSignIn = useCallback(async () => {
    await signIn({ username: userName, password });
  }, [signIn, userName, password]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (session) {
    return <Redirect href="/" />;
  }

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" gap="$4">
      <H2>Sign in to your account</H2>
      <YStack gap="$1" marginTop="$4" minWidth={300}>
        <XStack
          backgroundColor="$color.green5Light"
          borderRadius="$4"
          padding="$3"
          gap="$2"
          alignItems="center"
        >
          <Ionicons
            name="information-circle"
            size={24}
            color={theme.green10.val}
          />
          <Text color="$black6">
            {`Use `}
            <Text color="$black6" fontWeight="bold">
              demo1@example.com
            </Text>
            {` / `}
            <Text color="$black6" fontWeight="bold">
              #demo1
            </Text>
            {`\nor `}
            <Text color="$black6" fontWeight="bold">
              demo2@example.com
            </Text>
            {` / `}
            <Text color="$black6" fontWeight="bold">
              #demo2
            </Text>
          </Text>
        </XStack>
        <Label htmlFor="userName">Username</Label>
        <Input id="userName" value={userName} onChangeText={changeUserName} />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          secureTextEntry
          value={password}
          onChangeText={changePassword}
        />
      </YStack>
      <Button onPress={handleSignIn}>Sign In</Button>
    </YStack>
  );
}
