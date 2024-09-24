import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";

type Post = {
    id: string;
    title: string;
};

const Item = ({title}: Post) => (
    <View style = {styles.item}>
        <Text style = {styles.title}>{title}</Text>
    </View>
);

export default function Home() {
    const [isLoading, setLoading] =useState(true);
    const [data, setData] = useState<Post[]>([]);

    const url = "https://jsonplaceholder.typicode.com/posts"

    const getPost = async() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <View style = {{flex: 1, padding: 24}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <SafeAreaView style = {styles.container}>
                <FlatList
                  data = {data}
                  renderItem = {({item}) => <Item title = {item.title} id = {""} />}
                  keyExtractor = {item => item.id}
                  />
                </SafeAreaView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: StatusBar.currentHeight || 0,
    }, 
    item: {
        backgroundColor: '#fbcab0', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
    },
    title: {
        fontSize: 32, 
    }, 
});