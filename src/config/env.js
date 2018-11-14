/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式  hash   history
 * imgBaseUrl: 图片所在域名地址
 * history
 */

let baseUrl = '';
let routerMode = 'history';
// let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
	imgBaseUrl = 'http://182.254.246.232:8080/';
}else if(process.env.NODE_ENV == 'production'){
	imgBaseUrl = 'https://fdfs.51jifengou.com/';
	var fieldHostname = location.hostname || '';
	//如果等于测试域名
	if (fieldHostname && fieldHostname.indexOf('t-saash5.lakalayunjifen.com') != -1) {
        imgBaseUrl = 'http://182.254.246.232:8080/';
    }
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
