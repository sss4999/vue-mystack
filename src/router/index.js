const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['../pages/index.vue'], resolve)
}];
export default routers;