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
					<Button title='Buisness' color='#5cb728' method={this.props.BnsNews}/>
					<Button title='Entertainment' color='#2887b7' method={this.props.EntNews}/>
					<Button title='Hack' color='#e04545' method={this.props.HckrNews}/>
				</View>
				<View style={tagsContainer}>
					<Button title='Indian' color='#007aff' method={this.props.IndNews}/>
					<Button title='Sports' color='#cc336b' method={this.props.SptsNews}/>
					<Button title='World' color='#bacc33' method={this.props.WldNews}/>
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
