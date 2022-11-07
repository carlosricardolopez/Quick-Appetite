import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';

{
  /* Importar componentes de la carpeta components para utilizarlos */
}
import Splash from './components/SplashScreen';
import Home from './components/Inicio';
import Tipo from './components/TipoOrden';
import Cart from './components/Menu';
import Cart2 from './components/Menu2';
import Cart3 from './components/Menu3';
import Sub from './components/menus';
import Logins from './components/login';
import Pay from './components/Pago';
import M from './components/Formadepago';
import M2 from './components/Formadepago2';
import M3 from './components/Gracias';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
{
  /*Creamos constante la cual sera el contenedor de nuestra ventana*/
}
const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Splash />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button title="Enter" onPress={() => navigation.navigate('Inicio')} />
    </View>
  );
};
//
const HomeWindow = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Home />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button
        title="Realizar pedido"
        onPress={() => navigation.navigate('Tipopedido')}
      />
    </View>
  );
};
//
const Orden = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Tipo />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View style={styles.boton1}>
        <Button
          title="COMER AQUI"
          onPress={() => navigation.navigate('menus')}
        />
      </View>
      <View style={styles.boton2}>
        <Button
          title="LLEVAR A CASA"
          onPress={() => navigation.navigate('menus')}
        />
      </View>
    </View>
  );
};
const Menus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Sub />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View style={styles.boton2}>
        <Button
          title="DESAYUNOS"
          onPress={() => navigation.navigate('Desayunos')}
        />
      </View>
      <View style={styles.boton2}>
        <Button
          title="ALMUERZOS"
          onPress={() => navigation.navigate('Almuerzos')}
        />
      </View>
      <View style={styles.boton3}>
        <Button
          title="BEBIDAS"
          onPress={() => navigation.navigate('Bebidas')}
        />
      </View>
    </View>
  );
};
const Pagos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Pay />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View style={styles.boton4}>
        <Button
          title="pago por Efectivo"
          onPress={() => navigation.navigate('Me')}
        />
      </View>
      <View style={styles.boton5}>
        <Button
          title="pago por Tarjeta"
          onPress={() => navigation.navigate('Ma')}
        />
      </View>
    </View>
  );
};

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Cart />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button
        title="Realizar pago"
        onPress={() => navigation.navigate('Pay')}
      />
    </View>
  );
};

const Menu2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Cart2 />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button
        title="Realizar pago"
        onPress={() => navigation.navigate('Pay')}
      />
    </View>
  );
};
const Menu3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <Cart3 />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <Button
        title="Realizar pago"
        onPress={() => navigation.navigate('Pay')}
      />
    </View>
  );
};
//
const Ma = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <M />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View style={styles.boton5}>
        <Button title="Continuar" onPress={() => navigation.navigate('Mi')} />
      </View>
    </View>
  );
};
const Me = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <M2 />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View style={styles.boton5}>
        <Button title="Continuar" onPress={() => navigation.navigate('Mi')} />
      </View>
    </View>
  );
};
const Mi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregamos nuestro componente */}
      <M3 />
      {/* Agregamos boton que nos servira para ir a otra ventana */}
      {/* le pasamos como argumento el nombre de la ventana a la cual querenmos ir */}
      <View>
        <Button title="SALIR" onPress={() => navigation.navigate('Splash')} />
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
        <Stack.Screen
          name="Splash"
          options={{ title: '¡Bienvenido!' }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Inicio"
          options={{ title: 'Inicio' }}
          component={HomeWindow}
        />
        <Stack.Screen
          name="Tipopedido"
          options={{ title: 'Tipo Pedido' }}
          component={Orden}
        />
        <Stack.Screen
          name="menus"
          options={{ title: 'menus' }}
          component={Menus}
        />
        <Stack.Screen
          name="Desayunos"
          options={{ title: 'Desayunos' }}
          component={Menu}
        />
        <Stack.Screen
          name="Almuerzos"
          options={{ title: 'Almuerzos' }}
          component={Menu2}
        />
        <Stack.Screen
          name="Bebidas"
          options={{ title: 'Bebidas' }}
          component={Menu3}
        />
        <Stack.Screen
          name="Pay"
          options={{ title: 'PAGOS' }}
          component={Pagos}
        />
        <Stack.Screen
          name="Ma"
          options={{ title: 'Pago en Tarjeta' }}
          component={Ma}
        />
        <Stack.Screen
          name="Me"
          options={{ title: 'Pago en Efectivo' }}
          component={Me}
        />
        <Stack.Screen
          name="Mi"
          options={{ title: 'Apetitoso' }}
          component={Mi}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  boton1: {
    alignSelf: 'center',
    paddingVertical: 15,
    marginVertical: 130,
    borderRadius: 15,
    width: '90%',
  },

  boton2: {
    alignSelf: 'center',
    paddingVertical: 15,
    marginVertical: 100,
    borderRadius: 15,
    width: '90%',
  },
  boton3: {
    alignSelf: 'center',
    paddingVertical: 15,
    marginVertical: 40,
    borderRadius: 15,
    width: '90%',
  },
  boton4: {
    alignSelf: 'center',
    paddingVertical: 15,
    marginVertical: 40,

    marginTop: -380,
    borderRadius: 15,
    width: '90%',
  },
  boton5: {
    alignSelf: 'center',
    paddingVertical: 15,
    marginVertical: 40,

    marginTop: 195,
    borderRadius: 15,
    width: '90%',
  },
});
