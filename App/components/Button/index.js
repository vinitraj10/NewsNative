import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';


const Button = (props) =>{
	const styles = StyleSheet.create({
		textStyle:{
			alignSelf:'center',
			color:'#fff',
			fontSize:12,
			fontWeight:'600',
			paddingTop:10,
			paddingBottom:10
		},

		buttonStyle:{
			flex:1,
			alignSelf:'stretch',
			backgroundColor:props.color,
			borderRadius:5,
			borderWidth:1,
			borderColor:'#fff',
			marginLeft:5,
			marginRight:5
		}
	});
	const {buttonStyle,textStyle} = styles;
	return(
		<TouchableOpacity style={buttonStyle} onPress={props.method}>
			<Text style={textStyle}>{props.title}</Text>
		</TouchableOpacity>
	);
}




export default Button;