import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';

const ICE_ROOT = document.getElementById("root");
if(!ICE_ROOT){
	throw new Error("当前页面不存在");
}
ReactDOM.render(router,ICE_ROOT);
