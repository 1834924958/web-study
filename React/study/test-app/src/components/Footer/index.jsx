import React from 'react';

import {Grid} from '@alifd/next';

const { Row,Col } = Grid;

export default () => {
	return (
		<div style={styles.container}>
			<div style={styles.content}>
				<Row wrap>
					<Col l="6"></Col>
					<Col l="7">
						<div style={styles.rightContent}>
							<img src={require('../../static/image/48_8386044.png')} alt="" style={styles.qrcode}/>
						</div>
						<div style={styles.rightTitle}>科技让创意永无边界</div>
					</Col>
					<Col l="11">
						<div style={styles.title}>联系方式</div>
						<div style={styles.desc}>
							<img src={require('../../static/image/mail.png')} alt="" style={styles.image}/>
							<div style={{marginLeft:'10px'}}>1834924958@qq.com</div>
						</div>
						<div style={styles.desc}>
							 <img src={require('../../static/image/adress.png')} alt="" style={{ ...styles.image2, marginLeft: '0.03rem' }} />
							<div style={{marginLeft:'10px'}}>上海市徐汇区方糖小镇</div>
						</div>
					</Col>
				</Row>
			</div>
			<div style={styles.footer}>沪ICP备123456号-1</div>
		</div>
	);
};
const styles = {
	container:{
		background:'#353535',
	},
	content:{
		maxWidth:'1200px',
		margin:'0 auto',
		padding:'80px 0px 130px',
	},
	rightContent:{
		position:'relative',
		height:'0.64rem',
	},
	qrcode:{
		position:'absolute',
		top:'0',
		left:'0',
		width:'1.72rem',
	},
	rightTitle:{
		color:'#ffffff',
		fontSize:'0.12rem',
		width:'1.72rem',
		textAlign:'center',
	},
	title:{
		fontSize:'20px',
		lineHeight:'26px',
		color:'#ffffff',
	},
	desc:{
		fontSize:'16px',
		lineHeight:'20px',
		color:'#fff',
		textAlign:'justify',
		marginTop:'20px',
		maxWidth:'830px',
		display:'flex',
	},
	image:{
		width:'0.26rem',
		height:'0.19rem',
	},
	image2: {
	    width: '0.2rem',
	    height: '0.25rem',
  	},
	footer:{
		height:'34px',
		lineHeight:'34px',
		background:'#000000',
		color:'#ffffff',
		textAlign:'center',
		lineAeight:'32px',
	}
};