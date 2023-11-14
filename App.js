import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "./screens/login";
import Home from "./screens/home";
import Profile from "./screens/profile";
import ListTodo from "./screens/listTodo";
import TaskAdd from "./screens/taskAdd";
import AboutUs from "./screens/aboutus";
import FirstScreen from "./screens/firstScreen";
import SettingsScreen from "./screens/settings";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

// khusus untuk button navigation
const Tabs = () => {
  return (
    <TabBottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Daily Planner":
              iconName = "home-outline";
              break;
            case "List Todo":
              iconName = "book-outline";

              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 4,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabel: () => null, // Menghilangkan label
      })}
    >
      <TabBottom.Screen
        name="Daily Planner"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: "left",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          },
          headerLeft: () => (
            <Ionicons
              name="book-outline"
              size={24}
              color="teal.500"
              style={{ marginLeft: 16 }}
            />
          ),
        }}
      />
      <TabBottom.Screen
        name="List Todo"
        component={ListTodo}
        options={{
          title: "List Todo",
          headerTitleAlign: "center",
        }}
      />
      <TabBottom.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerTitleAlign: "center",
        }}
      />
    </TabBottom.Navigator>
  );
};
// untuk semua screen
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="FirstScreen">
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="listTodo" component={ListTodo} />
          <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="TaskAdd" component={TaskAdd} options={{
            title: "Add Task"
          }} />
          <Stack.Screen name="AboutUs" component={AboutUs} options={{
            title: "About Us"
          }} />
          <Stack.Screen name="settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>

  );
};

export default App;