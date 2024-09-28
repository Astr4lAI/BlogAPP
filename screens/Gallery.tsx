import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

const Gallery: React.FC = () => {
    return (
        <ScrollView contentContainerStyle = {styles.scrollContainer}>
            <Text style = {styles.title}>
                Lista de imágenes
            </Text>
            <Image 
             source = "BlogApp/BlogAPP/assets/brownOne.png" 
             style = {styles.image}
             resizeMode = "contain"
             />
            <Image
             source = {require("BlogApp/BlogAPP/assets/purpleOne.png")}
             style = {styles.image}
             resizeMode = "contain"
            />
            <Image
             source = {require("BlogApp/BlogAPP/assets/greenOne.png")}
             style = {styles.image}
             resizeMode = "contain"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 600,
        height: 500,
        marginBottom: 20,
    },
});

export default Gallery;