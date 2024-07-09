import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';


export default function ProductDetailScreen({route}) {
    const {products}= route.params;
   const navigation = useNavigation();

    const goToCheckout = () => {
        navigation.navigate('Checkout');
    };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
         <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Icon name='menu' size={30}/>
                </TouchableOpacity>
                <Image source={require('./assets/Logo.png')}/>
                <Icon name='search' size={30}/>
                <TouchableOpacity onPress={goToCheckout}><FontAwesome name='shopping-bag' size={30}/></TouchableOpacity>
            </View>
     <View style={styles.productContainer}>
        <Image source ={{uri: products.image}} style= {styles.productImage}/>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.description}>{products.description}</Text>
     </View>
     </ScrollView>
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
    marginBottom: 20
  },
  productImage:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title:{
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description:{
    fontSize:16,
    marginVertical:10,
  }
});