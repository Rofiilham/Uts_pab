import React from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, Spacer, Text, Button, HStack } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const handleAddTaskPress = () => {
        navigation.navigate('TaskAdd');
    };

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Box p={4} flex={1} bgColor={"white"}>
                <VStack space={4} justifyContent="center">
                    <Button
                        onPress={handleAddTaskPress}
                        backgroundColor="#D9D9D9"
                        borderRadius={10}
                    >
                        <HStack space={2} alignItems="center">
                            <Ionicons name="add-circle-outline" size={24} />
                            <Text fontWeight="bold">Add Some Task</Text>
                        </HStack>
                    </Button>

                    <Spacer />

                    <HStack space={2} alignItems={"center"}>
                        <Ionicons name="sunny-outline" size={30} />
                        <Text color="black" fontSize="xl" fontWeight="bold">This is Schedule</Text>
                    </HStack>
                    <VStack space={4} >
                        <Button backgroundColor="#D9D9D9" borderRadius={10}>
                            <HStack space={2} alignItems="center">
                                <Ionicons name="checkmark-circle-outline" size={30} />
                                <Text fontSize={15} >
                                    My Daily
                                </Text>
                            </HStack>
                        </Button>

                        <Button
                            backgroundColor="#D9D9D9"
                            borderRadius={10}
                        >
                            <HStack space={2} alignItems="center">
                                <Ionicons name="checkmark-circle-outline" size={30} />
                                <Text fontSize={15} >
                                    Important
                                </Text>
                            </HStack>
                        </Button>
                        <Button
                            backgroundColor="#D9D9D9"
                            borderRadius={10}
                        >
                            <HStack space={2} alignItems='center'>
                                <Ionicons name="checkmark-circle-outline" size={30} />
                                <Text fontSize={15} >
                                    Planned
                                </Text>
                            </HStack>
                        </Button>
                    </VStack>



                </VStack>
            </Box>
        </ScrollView>
    );
};

export default Home;
