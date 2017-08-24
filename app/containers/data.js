import React,{Component} from 'react';
import {ScrollView,Text,StyleSheet} from 'react-native';

class Data extends Component{
	renderNews(article){
		return <Text key={article.title}>{article.title}</Text>
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

export default Data;