import React,{Component} from 'react';
import QRCode from 'qrcode.react';
import HeadNav from '../../common/HeadNav';
import FooterNav from '../../common/FooterNav';
import '../../styles/layouts/DefaultLayout.css';
export default class DefaultLayout extends Component {
	render(){
		return (
			<div id="DefaultLayout">
			Hello Word1
				<HeadNav/>
				<h3>1.QRCode功能的生成</h3>
				<br/>
				<QRCode value="hello world" size="100" bgColor="#3399CC"/>
				<FooterNav/>
			</div>
		)
	}
}