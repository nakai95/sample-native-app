import { Spinner, YStack } from "tamagui";

export function LoadingOverlay() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Spinner size="large" color="$green10" />
    </YStack>
  );
}
