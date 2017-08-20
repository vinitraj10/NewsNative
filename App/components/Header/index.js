import React,{Component} from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default class Header extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.brand}>NEWS</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#e5e5e5',
		height:60,
		elevation:4
	},
	brand:{
		fontSize:24,
		textAlign:'center',
		margin:10,
		color:'#646566'
	}
});