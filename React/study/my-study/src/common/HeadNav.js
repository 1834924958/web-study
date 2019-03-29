import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import '../styles/common/HeadNav.css';
export default class HeadNav extends Component {
	state = {
		current:'home',
	}
	render(){
		return (
			<div id="HeadNav">
				<div className="nav-wrap">
					<div className="nav-logo-wrap">
						<Icon type="global" className="nav-logo"/>
					</div>
					<div className="nav-list-wrap">
						<Menu selectedKeys={[this.state.current]} mode="horizontal">
						<Menu.Item key="home">首页</Menu.Item>
						<Menu.Item key="aboutme">关于我</Menu.Item>
						<Menu.Item key="resource">资源</Menu.Item>
						</Menu>
					</div>
				</div>
			</div>
		)
	}
}
