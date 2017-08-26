import React,{Component} from 'react';
import {ScrollView,Text,View,StyleSheet,Image} from 'react-native';

class Data extends Component{
	renderNews(article){
		return(
			<View style={styles.container} key={article.title}>
				<View style={styles.childContainer}>
					<Image 
					style={styles.imgStyle}
					source={{uri:article.urlToImage}}
					/>
				</View>
				<Text>{article.title}</Text>
			</View>
		);	
	}
	render(){
		const {articles} = this.props.data;
		return (
			<ScrollView>
				{articles.map(this.renderNews)}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		margin:10,
		padding:10,
		borderColor:"#ddd",
		borderWidth:1,
		borderRadius: 2,
	},
	childContainer:{
		margin:5,
		borderColor:"#ddd",
		borderWidth:1,
		borderRadius:2,
	},
	imgStyle:{
		width:50,
		height:50
	}
});

export default Data;