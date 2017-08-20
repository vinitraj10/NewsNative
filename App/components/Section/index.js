import React from 'react';
import {View,StyleSheet} from 'react-native';

const Section = (props) =>{
	return(
		<View style={styles.container}>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		justifyContent:'flex-start',
		margin:10,
	}
});

export default Section;