import React from "react";
import { Platform, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";
import LogIn from "../pages/LogIn";

// const AppBar = Platform.select({
//     ios: () => require('./IOSAppBar.jsx').default,
//     default: () => require('./IOSAppBar.jsx').default,
// })()

const Main = () => {
    return ( 
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path="/" 
                    element={<RepositoryList />}
                    exact
                />
                <Route path="/signin" 
                    element={<LogIn />}
                    exact
                />
            </Routes>
        </View>
    );
}
 
export default Main;