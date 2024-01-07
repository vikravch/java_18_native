import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack/lib/typescript/src/types";
import {ParamListBase} from "@react-navigation/native";

function CategoryPage(
    {navigation, route}:StackScreenProps<ParamListBase>) {
    return (
        <View style={styles.container}>
            <Text>Category page {route.path}</Text>
            <Button
                title="Move back"
                onPress={() =>
                    navigation.goBack()
                }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#745',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default CategoryPage;
