import React from 'react';
import ReactDOM from 'react-dom';
/// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';
import router from './router';
import './rem';
const ICE_CONTAINER = document.getElementById("ice-container");
if(!ICE_CONTAINER){
	throw new Error("当前页面不存在");
}
ReactDOM.render(router,ICE_CONTAINER);
