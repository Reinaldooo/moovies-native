import React from "react";
import { Dimensions, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { products } from "./Model";
import Card, { CARD_HEIGHT } from "./Card";
import Products from "./Products";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    slider: { height: CARD_HEIGHT },
});

const Main = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#334" }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={styles.slider}>
                    <ScrollView horizontal>
                        {products.map((product, index) => (
                            <Card product={product} key={index} />
                        ))}
                    </ScrollView>
                    <Products />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Main;
