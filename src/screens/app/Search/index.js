import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, FlatList, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { treeData } from "../../../data/data";
import {styles} from './styles'

const Search = () => {
    const [search, setSearch] = useState('');
    const [showHistory, setShowHistory] = useState(true);
    const [history, setHistory] = useState([]);

    const clearHistory = () => {
        Alert.alert(
            "Clear History",
            "Are you sure you want to clear your search history?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => setHistory([]),
                }
            ],
            { cancelable: true }
        );
    };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => {}}>
                    <Image source={require('../../../assets/image/back.png')} style={styles.leftIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>Tìm Kiếm</Text>
                <TouchableOpacity style={styles.rightContainer} onPress={clearHistory}>
                    <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput placeholder="Search" 
                    value={search}
                    onChangeText={setSearch}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.searchButton} onPress={()=>{
                    setShowHistory(!showHistory);
                    if (!showHistory) {
                        setHistory(prevHistory => [
                            ...prevHistory,
                            {
                                id: Math.random().toString(),
                                title: search
                            }
                        ]);
                        setSearch('');
                    }
                    console.log(showHistory)
                }}>
                    <Text style={styles.searchButtonText}>{showHistory ? "History" : "Search"}</Text>
                </TouchableOpacity>
            </View>

            {showHistory ? (
                <View style={styles.historyContainer}>
                    <Text style={styles.historyTitle}>Search History</Text>
                    <FlatList
                        data={history}
                        renderItem={({item})=>{
                            return (
                                <TouchableOpacity
                                    onPress={()=>{
                                        setShowHistory(false);
                                        setSearch(item.title);
                                    }}
                                >
                                    <Text style={styles.historyItem}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            ): (
                <FlatList
                    data={treeData}
                    renderItem={({item})=>{
                        if(item.name.includes(search) && search.trim() !== ''){
                            return (
                                <View style={styles.resultItem}>
                                    <Text>{item.name}</Text>
                                </View>
                            );
                        } else {
                            return null;
                        }
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </SafeAreaView>
    );
};

export default Search;
