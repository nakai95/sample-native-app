import FontAwesome from "@expo/vector-icons/FontAwesome";
import Drawer from "expo-router/drawer";
import React from "react";

export default function HomeLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          drawerIcon: (props) => <FontAwesome name="user" {...props} />,
        }}
      />
    </Drawer>
  );
}
