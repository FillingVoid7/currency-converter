import React from "react";
import { Slot } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

type TabParamList = {
  home: undefined;
  explore: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const Layout: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          // Assign appropriate icons for each route
          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "search";
          } else {
            iconName = "help"; // Fallback icon (optional)
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
      })}
    >
      {/* Tabs linking to directories in your app folder */}
      <Tab.Screen name="home" component={Slot} options={{ title: "Home" }} />
      <Tab.Screen name="explore" component={Slot} options={{ title: "Explore" }} />
    </Tab.Navigator>
  );
};

export default Layout;
