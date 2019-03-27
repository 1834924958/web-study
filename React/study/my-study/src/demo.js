import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '@/styles/demo.css';

class Demo extends Component {
	reader(){
		return (
			<div className="chenxi">
				<h3>测试的操作</h3>
			</div>
		);
	}
}
// export default Demo
ReactDOM.render(
	<Demo/>,
	document.getElementById('root')
);