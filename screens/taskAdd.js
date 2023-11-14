import React, { useState } from 'react'
import { Text } from 'react-native'
import { Box, useToast, VStack, HStack, IconButton, Input, Icon, Checkbox } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput } from 'react-native';

const TaskAdd = () => {
    const toast = useToast();
    const instState = [{
        title: "Code",
        isCompleted: true
    }, {
        title: "Meeting with team at 9",
        isCompleted: false
    }, {
        title: "Check Emails",
        isCompleted: false
    }, {
        title: "Write an article",
        isCompleted: false
    }];
    const [taskName, setTaskName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleTaskNameChange = (text) => {
        setTaskName(text);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [list, setList] = useState(instState);
    const [inputValue, setInputValue] = useState("");

    const addItem = title => {
        if (title === "") {
            toast.show({
                title: "Please Enter Text",
                status: "warning"
            });
            return;
        }

        setList(prevList => {
            return [...prevList, {
                title: title,
                isCompleted: false
            }];
        });
    };

    const handleDelete = index => {
        setList(prevList => {
            const temp = prevList.filter((_, itemI) => itemI !== index);
            return temp;
        });
    };

    const handleStatusChange = index => {
        setList(prevList => {
            const newList = [...prevList];
            newList[index].isCompleted = !newList[index].isCompleted;
            return newList;
        });
    };

    return <Box flex={1} backgroundColor={'#FFFFFF'} >
        <Box maxW="350" w="100%" alignSelf="center">
            <Box marginY={5}>
                <TextInput
                    placeholder="masukkan kategori kegiatan"
                    value={taskName}
                    onChangeText={handleTaskNameChange}
                    borderColor={'#ccc'}
                    paddingY={7}
                    borderBottomWidth={1}
                    borderBottomColor={"coolGray.300"}
                    fontWeight={"bold"}
                    fontSize={20}
                />
            </Box>

            <VStack space={4}>
                <HStack space={2}>
                    <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
                    <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Ionicons} name="add-circle-outline" size="md" color="warmGray.50" />} onPress={() => {
                        addItem(inputValue);
                        setInputValue("");

                    }} />
                </HStack>
                <VStack space={2}>
                    {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                        <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} aria-label={item.title} marginRight={3}></Checkbox>
                        <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                            color: item.isCompleted ? "gray.400" : "coolGray.800"
                        }} _dark={{
                            color: item.isCompleted ? "gray.400" : "coolGray.50"
                        }} onPress={() => handleStatusChange(itemI)}>
                            {item.title}
                        </Text>
                        <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Ionicons} name="remove-circle-outline" size="md" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
                    </HStack>)}
                </VStack>
            </VStack>
        </Box>
    </Box>;
};
export default TaskAdd
