import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import {Link} from 'react-router-dom';
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
						<Menu selectedKeys={[this.state.current]} mode="horizontal"  onClick={this.handleClick}>
						<Menu.Item key="home">
							<Link to="/">首页</Link>
						</Menu.Item>
						<Menu.Item key="aboutme">
							<Link to="/home">关于我</Link>
						</Menu.Item>
						<Menu.Item key="resource">
							<Link to="/resource">资源</Link>
						</Menu.Item>
						</Menu>
					</div>
				</div>
			</div>
		)
	}
}
