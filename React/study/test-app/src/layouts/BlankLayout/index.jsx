import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import Footer from '../../components/Footer';
export default class HeaderFooterLayout extends Component {
	static propTypes = {};
	static defaultProps = {};
	render(){
		return(
			<Footer />
		);
	}
}

