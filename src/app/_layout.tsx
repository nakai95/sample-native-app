import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";

import { tamaguiConfig } from "@/../tamagui.config";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SessionProvider } from "@/context/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  repositoryComposition,
  RepositoryContextProvider,
} from "@/context/repository";
import { useCustomFonts } from "@/assets/fonts";

export default function RootLayout() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        networkMode: "always",
      },
      mutations: {
        networkMode: "always",
      },
    },
  });

  const colorScheme = useColorScheme();
  const [loaded] = useCustomFonts();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RepositoryContextProvider repositoryComposition={repositoryComposition}>
        <SessionProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <TamaguiProvider
              config={tamaguiConfig}
              defaultTheme={
                colorScheme === "dark" ? "dark_green" : "light_green"
              }
            >
              <StatusBar style="auto" />
              <Stack>
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              </Stack>
            </TamaguiProvider>
          </ThemeProvider>
        </SessionProvider>
      </RepositoryContextProvider>
    </QueryClientProvider>
  );
}
