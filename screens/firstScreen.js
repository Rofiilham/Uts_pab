import React from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate("Tabs");
    };

    return (
        <ImageBackground
            source={require("../assets/first.webp")}
            style={styles.background}
        >
            <Text style={styles.titleText}>Plan Your Daily's </Text>
         
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLoginPress}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = {
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "flex-end", 
        alignItems: "center",
        paddingBottom: 20, 
    },
    titleText: {
        color: "black",
        fontSize: 75,
        fontWeight: "bold",
        marginTop: 100, 
        marginLeft: 20, 
    },
    loginButton: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 70, 
        borderRadius: 10, 
    },
    loginText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },
};

export default FirstScreen;
