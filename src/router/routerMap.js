import routers from './router'

export const ROUTER_MAP = {
    NAV: [
        {
            to: '/',
            text: '控制台'
        },
        {
            to: '/classify',
            text: '闲置管理'
        },
        {
            to: '/find',
            text: '采购管理'
        }
    ],
    ROUTE: [
        {
            path: '/',
            component: routers.Home
        },
        {
            path: '/classify',
            component: routers.Classify
        },
        {
            path: '/find',
            component: routers.Find
        }
    ]
}