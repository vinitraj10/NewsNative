import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SingleNews from '../../../components/SingleNews';

const News = () => {
	return(
		<View style={styles.container}>
			<SingleNews/>
		</View>
	);
}

const styles=StyleSheet.create({
	container:{
		margin:15
	}
});

export default News;



