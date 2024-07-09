import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import axios from 'axios';


export default function Home() {
    const navigation = useNavigation();
    const {cart, setCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);


    useEffect (() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products');
                setProducts(res.data);
            }catch (error){
                console.error(`Couldn't load products`);
            }
        };
        fetchProducts();
    }, []);

    const goToCheckout = () => {
        navigation.navigate('Checkout');
    };

    const addToCart = (item) => {
        setCart([...cart, item])
    };

    const renderItem = ({item}) => (
        <View key={item.id} style={styles.product}>
            <TouchableOpacity onPress={() =>navigation.navigate("ProductDetailScreen", {products: item})}>
            <Image source={{uri: item.image}} style={styles.productImage}/>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles.iconOverlay}>
            <MaterialIcons name='add-circle' size={30} style={styles.iconOverlay}/>
            </TouchableOpacity>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
            </TouchableOpacity>
        </View>
    )

  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Icon name='menu' size={30}/>
                </TouchableOpacity>
                <Image source={require('./assets/Logo.png')}/>
                <Icon name='search' size={30}/>
                <TouchableOpacity onPress={goToCheckout}><FontAwesome name='shopping-bag' size={30}/></TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize: 30, fontFamily: 'helvetica'}}>OUR STORY</Text>
                <View style={styles.titleIcon}>
                    <Icon name='filter' size={30} style={styles.iconSpacing}/>    
                    <Icon name='list' size={30} style={styles.iconSpacing}/>
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.productContainer}
                showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  title: {
    marginHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleIcon: {
    marginTop: -5,
    flexDirection: 'row'
  },
  iconSpacing: {
    marginLeft: 30, 
  },
  productContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  product:{
    flex: 1,
    margin: 10,
    alignItems: 'center'
  },
  productImage:{
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  iconOverlay:{
    position: 'absolute',
    bottom: 70,
    right: 0,
  },
  text: {
    fontSize: 20,
    fontFamily: 'arial',
    marginTop: 15,
  },
  subText: {
    fontSize: 15,
    fontFamily: 'futura',
  },
  priceText: {
    fontSize: 20,
    color: 'orange',
    marginTop: 5,
    marginBottom: 20
  }
});