import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SingleNews from '../components/SingleNews';
import {connect} from 'react-redux';

class News extends Component{
	render(){
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
		bns: state.bns,
		ent: state.ent,
		hckr: state.hckr,
		ind: state.ind,
		spts: state.spts,
		wld: state.wld
	};
}

export default connect(mapStateToProps)(News);