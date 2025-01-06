import { LoadingOverlay } from "@/components/loading";
import { useSession } from "@/context/auth";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "tamagui";

export default function TabLayout() {
  const { session, isLoading } = useSession();
  const theme = useTheme();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <LoadingOverlay />;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="../sign-in" />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.green8Dark.val,
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            tabBarIcon: (props) => <FontAwesome name="home" {...props} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: (props) => <FontAwesome name="info" {...props} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
