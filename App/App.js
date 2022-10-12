import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';

{/* Importar componentes de la carpeta components para utilizarlos */}
import Componente1 from './components/VentanaInicio';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
{/*Creamos constante la cual sera el contenedor de nuestra ventana*/}
const Ventana1 = ({navigation}) =>  {
  return (
    <View>
      {/* Agregamos nuestro componente */}
      <Componente1/>
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Ir a otra Ventana" onPress={() => navigation.navigate("Inicio")}/>
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
      <Stack.Screen name="Inicio" options={{ title: 'Welcome' }} component={Ventana1}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
});
