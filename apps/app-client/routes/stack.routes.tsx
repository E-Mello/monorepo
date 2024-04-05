import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Welcome from "../app/screens/welcome";
import Login from "../app/screens/login";
import Register from "../app/screens/register";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}
