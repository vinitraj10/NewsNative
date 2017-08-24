import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class Data extends Component{
	render(){
		return (
			<View>
				<Text>{this.props.data.source}</Text>
			</View>
		);
	}
}

export default Data;