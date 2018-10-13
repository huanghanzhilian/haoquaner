/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式  hash   history
 * imgBaseUrl: 图片所在域名地址
 * history
 */

let baseUrl = '';
//let routerMode = 'history';
let routerMode = 'hash';
let imgBaseUrl = '';
// https://fdfs.51jifengou.com/
// let imgBaseUrl = 'http://p14wwtw7q.bkt.clouddn.com/';
//let imgBaseUrl = 'http://static.samured.com';
//http://182.254.246.232:8080/
if (process.env.NODE_ENV == 'development') {
	imgBaseUrl = 'http://182.254.246.232:8080/';
}else if(process.env.NODE_ENV == 'production'){
	imgBaseUrl = 'http://182.254.246.232:8080/';
	// imgBaseUrl = 'https://fdfs.51jifengou.com/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
