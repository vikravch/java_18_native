import React, {useEffect} from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../general/redux/store";
import {ReducerType} from "../redux/sliceReducer";
import {Cocktail} from "../../domain/model/Cocktail";
import {getRandomCocktailAction} from "../redux/asyncActions";
import { StackNavigationProp } from '@react-navigation/stack';
import {StackScreenProps} from "@react-navigation/stack/lib/typescript/src/types";
import {ParamListBase} from "@react-navigation/native";

function HomePage({navigation}:StackScreenProps<ParamListBase>) {

    const dispatch = useDispatch<AppDispatch>();
    const cocktail = useSelector<ReducerType, Cocktail|undefined>(store => store.cocktailRandom);

    useEffect(()=>{
        dispatch(getRandomCocktailAction());
        //dispatch(getCategoriesAction());
    },[]);
    if(cocktail){
        return (
            <View style={styles.container}>
                <Text>{cocktail.name}</Text>
                <Image
                    style={styles.logo}
                    source={{
                        uri: cocktail.imageURL,
                }}/>
                <Button title={"Refresh"} onPress={
                    ()=>{
                        dispatch(getRandomCocktailAction());
                    }
                }/>

                <Button
                    title="Move to categories"
                    onPress={() =>
                        navigation.navigate('Categories')
                    }
                />
                <StatusBar style="auto" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#745',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
    },
});
export default HomePage;
