import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import theme from '../theme';
import RepositoryStats from './RepositoryStats';
import StyledText from './StyledText';


const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }}/>
            <View style={{ paddingLeft: 10, flex: 1 }}>
                <StyledText fontWeight='bold'>{fullName}</StyledText>
                <StyledText color='secondary'>{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View>
    )
}


const RepositoryItem = (props) => {
    return ( 
        <View key={props.id} style={styles.repo}>
            <RepositoryItemHeader {...props}/>
            <RepositoryStats {...props} />
        </View>
);
}

const styles = StyleSheet.create({
    repo: { 
        padding: 20,
        paddingVertical: 5,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    },
});

export default RepositoryItem;
