import { View } from "react-native";
import React from "react";
import { Box, Text, Heading } from "native-base";

const ListTodo = () => {
  return (
    <Box flex={1} alignItems={'center'} >
      <Box backgroundColor={'white'} width={'100%'} p={2} marginTop={10} rounded={20}>
        <Heading>To Do Today</Heading>
      </Box>
      <Box backgroundColor={'white'} width={'100%'} p={2} marginTop={4} rounded={20}>
        
      </Box>
      <Text></Text>
    </Box>
  );
};

export default ListTodo;
