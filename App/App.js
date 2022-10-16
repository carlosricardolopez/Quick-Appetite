import * as React from 'react';
import { View, StyleSheet, Button} from 'react-native';

{/* Importar componentes de la carpeta components para utilizarlos */}
import Splash from './components/SplashScreen';
import Home from './components/Inicio';
import Tipo from './components/TipoOrden';
import Cart from './components/Menu';
import Logins from './components/login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
{/*Creamos constante la cual sera el contenedor de nuestra ventana*/}
const SplashScreen = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Splash/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Enter" onPress={() => navigation.navigate("LoginSC")}/>
    </View>
  );
};
//
const HomeWindow = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Home/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Continuar" onPress={() => navigation.navigate("Tipopedido")}/>
    </View>
  );
};
//
const Orden = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Tipo/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Ir a orden" onPress={() => navigation.navigate("Menu")}/>
    </View>
  );
};
//
const Menu = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Cart/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Regresar" onPress={() => navigation.navigate("Inicio")}/>
    </View>
  );
};

const LoginSC = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Logins/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="continuar con la sesion" onPress={() => navigation.navigate("Inicio")}/>
    </View>
  );
};
//

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* Aqui agregamos las ventanas que tendra nuestra App */}
      <Stack.Screen name="Splash"options={{title:'¡Bienvenido!'}} component={SplashScreen}/>
      <Stack.Screen name="Inicio" options={{ title: 'Inicio' }} component={HomeWindow}/>
      <Stack.Screen name="Tipopedido" options={{ title: 'Tipo Pedido' }} component={Orden}/>
      <Stack.Screen name="Menu" options={{ title: 'Menu' }} component={Menu}/>
      <Stack.Screen name="LoginSC" options={{ title: 'Inicar Sesion' }} component={LoginSC}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height:'100%',
  },
});

