import React from 'react';
import Constants from 'expo-constants'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';
import { Link, redirect, useLocation } from 'react-router-native';

const AppBarTab = ({ children,  to }) => {
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active,
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return ( 
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Signin</AppBarTab>
            </ScrollView>
        </View>
    );
}
  
 export default AppBar;

 const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
    },
    scroll: {
        paddingBottom: 15,
    },
    text: {
        color: theme.appBar.textsecondary,
        marginLeft: 20,
    },
    active: {
        color: theme.appBar.textPrimary,
    }
 })