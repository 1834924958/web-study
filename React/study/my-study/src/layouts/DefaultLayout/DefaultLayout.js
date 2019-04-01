import React,{Component} from 'react';
import QRCode from 'qrcode.react';
import HeadNav from '../../common/HeadNav';
import FooterNav from '../../common/FooterNav';
import {Route} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Resource from '../../routes/Resource/Resource';
import '../../styles/layouts/DefaultLayout.css';
export default class DefaultLayout extends Component {
	render(){
		return (
			<div id="DefaultLayout">
				<HeadNav/>
				<Route path={this.props.match.url+'/'} component={Home} exact/>
				<Route path={this.props.match.url+'/resource'} component={Resource} />
				{/***<h3>1.QRCode功能的生成</h3>
				<br/>
				<QRCode value="hello world" size="100" bgColor="#3399CC"/>***/}
				<FooterNav/>
			</div>
		)
	}
}