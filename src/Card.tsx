import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";

import { Product } from "./Model";
import Button from "./components/Button";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width,
        height,
    },
    title: {
        // fontFamily: "GothamRounded-Bold",
        fontSize: 28,
        textAlign: "center",
        color: "#fff",
        marginBottom: 16,
        marginTop: 25,
    },
});

interface CardProps {
    product: Product;
}

const Card = ({ product: { color1, title } }: CardProps) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    borderRadius: 16,
                    margin: 32,
                    flex: 1,
                    padding: 16,
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Button label="Assistir" />
            </View>
        </View>
    );
};

export default Card;
