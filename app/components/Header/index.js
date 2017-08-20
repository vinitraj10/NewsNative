import React,{Component} from 'react';
import { View,Image,StyleSheet} from 'react-native';

export default class Header extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Image
					source={require('./img/newspaper.png')}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#dbd7e0',
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