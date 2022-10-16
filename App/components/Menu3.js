import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default class Cart3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectAll: false,
			cartItemsIsLoading: false,
			cartItems: [

      

	

        //BEBIDAS

        	{itemId: "501436310", name: "Coca cola", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1640812295_Coca%20cola.jpg", color: "Precio $1.50", qty: 1, salePrice: "1.50", checked: 0},
				{itemId: "35031811", name: "Fanta™", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1640812315_Fanta.jpg", qty: 1, color: "Precio $1.50", salePrice: "1.50", checked: 0},
				{itemId: "80109913", name: "Sprite", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1640812335_Sprite.jpg", qty: 1, color: "Precio $1.50", salePrice: "1.50", checked: 0},
				{itemId: "42608014", name: "Coca Cola Zero", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1640812355_Zero.jpg", color: "Precio $1.50", qty: 1, salePrice: "1.50", checked: 0},
				{itemId: "247714315", name: "Jugo De naranja", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1640812399_jugo%20de%20naranja.jpg", qty: 1, color: "Precio $1.50", salePrice: "1.50", checked: 0},
        	{itemId: "501436316", name: "Agua", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1640812488_Agua%20pura.jpg", color: "Precio $1.50", qty: 1, salePrice: "1.50", checked: 0},
				{itemId: "35031817", name: "Te Caliente", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1646086138_Te%CC%81_12oz.png", qty: 1, color: "Precio $1.50", salePrice: "1.50", checked: 0},
				{itemId: "801099118", name: "Cafe", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1646085285_Chocolate_8oz.png", qty: 1, color: "Precio $1.50", salePrice: "1.50", checked: 0},
				{itemId: "42608019", name: "Cafe Con Leche", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1646086105_Cafe%CC%81_8oz.png", color: "Precio $1.50", qty: 1, salePrice: "1.50", checked: 0},
				{itemId: "247714320", name: "Chocolate", thumbnailImage: "https://mcdonalds.com.sv/imagen/menu-products/1646086117_Cafe%CC%81ConLeche_8oz.png", qty: 1, color: "Precio $1.50", salePrice: "1.50", checked: 0}



			]
		}
	}
	
	selectHandler = (index, value) => {
		const newItems = [...this.state.cartItems]; 
		newItems[index]['checked'] = value == 1 ? 0 : 1; 
		this.setState({ cartItems: newItems }); 
	}
	
	selectHandlerAll = (value) => {
		const newItems = [...this.state.cartItems]; 
		newItems.map((item, index) => {
			newItems[index]['checked'] = value == true ? 0 : 1; 
		});
		this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); 
	}
	

	
	quantityHandler = (action, index) => {
		const newItems = [...this.state.cartItems];  
		
		let currentQty = newItems[index]['qty'];
		
		if(action == 'more'){
			newItems[index]['qty'] = currentQty + 1;
		} else if(action == 'less'){
			newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
		}
		
		this.setState({ cartItems: newItems }); 
	}
	
	subtotalPrice = () => {
		const { cartItems } = this.state;
		if(cartItems){
			return cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.qty * item.salePrice : 0), 0 );
		}
		return 0;
	}
	
	
	
	render() {
		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
		});
		
		const { cartItems, cartItemsIsLoading, selectAll } = this.state;
		
		return (
			<View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
				<View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10}}>
					<View style={[styles.centerElement, {width: 50, height: 50}]}>
						<Ionicons name="ios-cart" size={25} color="#000" />
					</View>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000'  }}>Quick-Appetite</Text>
					</View>
				</View>
				
				
				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, {height: 300}]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
					<ScrollView>	
						{cartItems && cartItems.map((item, i) => (
							<View key={i} style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120}}>
								<View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandler(i, item.checked)}>
										<Ionicons name={item.checked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={item.checked == 1 ? "#0faf9a" : "#aaaaaa"} />
									</TouchableOpacity>
								</View>
								<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
									<TouchableOpacity onPress={() => {}} style={{paddingRight: 10}}>
										<Image source={{uri: item.thumbnailImage}} style={[styles.centerElement, {height: 60, width: 60, backgroundColor: '#eeeeee'}]} />
									</TouchableOpacity>
									<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
										<Text numberOfLines={1} style={{fontSize: 15}}>{item.name}</Text>
										<Text numberOfLines={1} style={{color: '#8f8f8f'}}>{item.color ? 'Variation: ' + item.color : ''}</Text>
                    <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>${item.qty * item.salePrice}</Text>
										<View style={{flexDirection: 'row'}}>
											<TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<MaterialIcons name="remove" size={22} color="#cccccc" />
											</TouchableOpacity>
											<Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
											<TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<MaterialIcons name="add" size={22} color="#cccccc" />
											</TouchableOpacity>
										</View>
									</View>
									
								</View>
								<View style={[styles.centerElement, {width: 60}]}>
									
									
								</View>
							</View>
						))}
					</ScrollView>
				)}
				
				{!cartItemsIsLoading &&
					<View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5}}>
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								<View style={[styles.centerElement, {width: 32, height: 32}]}>
									<MaterialCommunityIcons name="ticket" size={25} color="#f0ac12" />
								</View>
							</View>
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								
								<View style={{paddingRight: 20}}>
									
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandlerAll(selectAll)}>
									<Ionicons name={selectAll == true ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} />
								</TouchableOpacity>
							</View>
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<Text>Select All</Text>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									<Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
									<Text>${this.subtotalPrice().toFixed(2)}</Text>
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center'}}>
							<TouchableOpacity style={[styles.centerElement, {backgroundColor: '#0faf9a', width: 100, height: 25, borderRadius: 5}]} onPress={() => console.log('test')}>
								<Text style={{color: '#ffffff'}}>Checkout</Text>
							</TouchableOpacity>
						</View>
					</View>
				}
			</View>
		);
	}
}
