import React from "react";
import {
    View,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";

interface ButtonProps {
    label: string;
}

const width = (Dimensions.get("window").width - 64) / 2;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 27,
        height: 54,
        width: width,
        backgroundColor: "#445",
    },
    label: {
        color: "white",
        fontSize: 16,
        // fontFamily: "GothamRounded-Bold",
        alignSelf: "center",
    },
});

const Button = ({ label }: ButtonProps) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Button;
