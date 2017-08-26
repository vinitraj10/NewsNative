import React,{Component} from 'react';
import {ScrollView,Text,View,StyleSheet,Image} from 'react-native';

class Data extends Component{
	renderNews(article){
		return(
			<View style={styles.container} key={article.title}>
				<View style={styles.titleContainer}>
					<View style={styles.childContainer}>
						<Image 
						style={styles.imgStyle}
						source={{uri:article.urlToImage}}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.textStyle}>{article.title}</Text>
					</View>
				</View>
				<View style={styles.descContainer}>
					<Text style={styles.detailStyle}>{article.description}</Text>
				</View>
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
	textStyle:{
		fontSize:12
	},
	detailStyle:{
		fontSize:14,
	},
	titleContainer:{
		flexDirection:'row'
	},
	descContainer:{
		flex:1,
	},
	container:{
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
	},
	textContainer:{
		flex:1
	}
});

export default Data;