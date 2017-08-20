import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BnsNews,EntNews,HckrNews,IndNews,SptsNews,WldNews} from '../../actions';
import Section from '../../components/Section';
import Button from '../../components/Button';

class Details extends Component{
	render(){
		const {tagsContainer,btn} = styles;
		return (
			<Section>
				<View style={tagsContainer}>
					<Button title='Buisness' color='#5cb728'/>
					<Button title='Entertainment' color='#2887b7'/>
					<Button title='Hack' color='#e04545'/>
				</View>
				<View style={tagsContainer}>
					<Button title='Indian' color='#007aff'/>
					<Button title='Sports' color='#cc336b'/>
					<Button title='World' color='#bacc33'/>
				</View>
			</Section>
		);
	}
}
const styles =StyleSheet.create({
	tagsContainer:{
		justifyContent:'space-around',
		flexDirection:'row',
		margin:20
	},
})


export default connect(null,{BnsNews,EntNews,HckrNews,IndNews,SptsNews,WldNews})(Details);
