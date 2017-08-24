import React,{Component} from 'react';
import {ScrollView,Text,StyleSheet} from 'react-native';
import SingleNews from '../components/SingleNews';
import {connect} from 'react-redux';
import Data from './data.js';

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
			const {data} = this.props.news;
			//console.log(data);
			if(isFetched){
				return <Data data={data}/>;
			}
			else{
				return <Text>Choose a suitable tag!</Text>
			}
		}
	}
	render(){
		const {container} = styles;
		return(
			<ScrollView style={container}>
				{this.checkNews()}
			</ScrollView>

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