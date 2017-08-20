import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SingleNews from '../components/SingleNews';
import {connect} from 'react-redux';

class News extends Component{
	constructor(props) {
		super(props);
		this.checkNews = this.checkNews.bind(this);
	}
	checkNews(){
		const {isFetching,isFetched,data} = this.props.news;
		if(isFetching){
			return <Text>Loading....</Text>
		}
		else{
			if(isFetched){
				return <Text>Data Fetched</Text>;
			}
			else{
				return <Text>Choose a suitable tag!</Text>
			}
		}
	}
	render(){
		const {container} = styles;
		return(
			<View style={container}>
				{this.checkNews()}
			</View>

		);
	}
}

const styles=StyleSheet.create({
	container:{
		margin:10
	}
});

const mapStateToProps = (state) =>{
	return{
		news:state.news
	};
}

export default connect(mapStateToProps)(News);