import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons'

export default function CustomDrawerComponent ({navigation}) {
    return(
        <DrawerContentScrollView>
            <View style = {styles.header}>
                <TouchableOpacity onPress={() => navigation.closeDrawer()} style={styles.closeButton}>
                    <Icon name="close" size={30}/>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Paa Kofi</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style = {styles.drawerItem}>
                <Text style = {styles.drawerItemText}>Store</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style = {styles.drawerItem}>
                <Text style = {styles.drawerItemText}>Locations</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style = {styles.drawerItem}>
                <Text style = {styles.drawerItemText}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style = {styles.drawerItem}>
                <Text style = {styles.drawerItemText}>Jewelery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style = {styles.drawerItem}>
                <Text style = {styles.drawerItemText}>Electronic</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style = {styles.drawerItem}>
                <Text style = {styles.drawerItemText}>Clothing</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create ({
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    closeButton:{
        padding: 5,
        marginRight: 200,
    },
    textContainer: {
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        marginRight: 80,
        marginTop: 20
    },
    text: {
        fontSize: 20,
        textTransform: 'uppercase',
    },
    drawerItem: {
        padding: 10,
        marginTop: 20,
    },
    drawerItemText: {
        fontSize: 24,
    }
})