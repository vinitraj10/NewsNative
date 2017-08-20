import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SingleNews from '../components/SingleNews';
import {connect} from 'react-redux';

class News extends Component{
	render(){
		console.log(this.props.news);
		const {container} = styles;
		return(
			<View style={container}>
				<Text>hey</Text>
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