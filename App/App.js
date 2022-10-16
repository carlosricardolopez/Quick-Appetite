import * as React from 'react';
import { View, StyleSheet, Button} from 'react-native';

{/* Importar componentes de la carpeta components para utilizarlos */}
import Splash from './components/SplashScreen';
import Home from './components/Inicio';
import Tipo from './components/TipoOrden';
import Cart from './components/Menu';
import Cart2 from './components/Menu2';
import Cart3 from './components/Menu3';
import Sub from './components/menus';
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
      <View style={styles.boton1} >
      <Button title="COMER AQUI" onPress={() => navigation.navigate("menus")}/>
      </View>
      <View style={styles.boton2}>
       <Button title="LLEVAR A CASA" onPress={() => navigation.navigate("menus")}/>
       </View>
    </View>
  );
};
const Menus = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Sub/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View style={styles.boton2}>
      <Button title="DESAYUNOS" onPress={() => navigation.navigate("Desayunos")}/>
      </View>
      <View style={styles.boton2}>
      <Button title="ALMUERZOS" onPress={() => navigation.navigate("Almuerzos")}/>
      </View>
      <View style={styles.boton3}>
      <Button title="BEBIDAS" onPress={() => navigation.navigate("Bebidas")}/>
      </View>
    </View>
  );
};





const Menu = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Cart/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Regresar" onPress={() => navigation.navigate("menus")}/>
    </View>
  );
};

const Menu2 = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Cart2/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Regresar" onPress={() => navigation.navigate("menus")}/>
    </View>
  );
};
const Menu3 = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Cart3/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Regresar" onPress={() => navigation.navigate("menus")}/>
    </View>
  );
};
//
const LoginSC = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Logins/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View style={styles.boton1} >
      <Button title="continuar con la sesion" onPress={() => navigation.navigate("Inicio")}/>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* Aqui agregamos las ventanas que tendra nuestra App */}
      <Stack.Screen name="Splash"options={{title:'¡Bienvenido!'}} component={SplashScreen}/>
      <Stack.Screen name="Inicio" options={{ title: 'Inicio' }} component={HomeWindow}/>
      <Stack.Screen name="Tipopedido" options={{ title: 'Tipo Pedido' }} component={Orden}/>
       <Stack.Screen name="menus" options={{ title: 'menus' }} component={Menus}/>
      <Stack.Screen name="Desayunos" options={{ title: 'Desayunos' }} component={Menu}/>
       <Stack.Screen name="Almuerzos" options={{ title: 'Almuerzos' }} component={Menu2}/>
        <Stack.Screen name="Bebidas" options={{ title: 'Bebidas' }} component={Menu3}/>
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
  boton1:{
     alignSelf:'center',
    paddingVertical:15,
    marginVertical:130,
    borderRadius:15,
    width:'90%'
  },

  boton2:{
     alignSelf:'center',
    paddingVertical:15,
    marginVertical:100,
    borderRadius:15,
    width:'90%'
  },
  boton3:{
     alignSelf:'center',
    paddingVertical:15,
    marginVertical:40,
    borderRadius:15,
    width:'90%'
  },
});
