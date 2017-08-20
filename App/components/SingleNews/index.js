import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default class SingleNews extends Component{
	render(){
		const {container} = styles;
		return(
			<View style={container}>
				<Text>DUDE</Text>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container:{
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:"#eee",
		borderRadius:5
	}
});