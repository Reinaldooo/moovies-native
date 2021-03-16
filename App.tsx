import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
//
import Main from "./src/Main";

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Main />
        </SafeAreaProvider>
    );
}
