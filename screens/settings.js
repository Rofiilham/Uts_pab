import React from "react";
import { View, Text, VStack, HStack, Divider, Switch } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const handleAboutUsPress = () => {
    navigation.navigate('AboutUs');
  };
  return (
    <View p={4}>
      <VStack space={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text>Notifikasi</Text>
          <Switch size="lg" />
        </HStack>
        <Divider />

        <HStack justifyContent="space-between" alignItems="center">
          <Text>Tema</Text>
          <Ionicons name="color-palette-outline" size={24} />
        </HStack>
        <Divider />
        <HStack justifyContent="space-between" alignItems="center">
          <Text onPress={handleAboutUsPress}>Tentang Kami</Text>
          <Ionicons name="information-circle-outline" size={24} />
        </HStack>
        <Divider />
      </VStack>
    </View>
  );
};

export default SettingsScreen;
