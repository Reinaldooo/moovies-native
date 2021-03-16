import React from "react";
import { Dimensions, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { products } from "./Model";
import Card from "./Card";
import Products from "./Products";
import Animated, {
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    interpolateColor,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    slider: { height },
});

const Main = () => {
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: { x } }) => {
            translateX.value = x;
        },
    });

    const animatedContainerStyle = useAnimatedStyle(() => ({
        flex: 1,
        backgroundColor: interpolateColor(
            translateX.value,
            products.map((_, i) => width * i),
            products.map((prod) => prod.color1)
        ) as string,
    }));

    return (
        <Animated.View style={animatedContainerStyle}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={styles.slider}>
                    <Animated.ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={width}
                        decelerationRate="fast"
                        scrollEventThrottle={16}
                        onScroll={scrollHandler}
                    >
                        {products.map((product, index) => (
                            <Card product={product} key={index} />
                        ))}
                    </Animated.ScrollView>
                    <Products x={translateX} />
                </View>
            </ScrollView>
        </Animated.View>
    );
};

export default Main;
