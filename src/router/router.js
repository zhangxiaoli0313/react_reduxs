import React from 'react'
import Loadable from 'react-loadable'

const MyLoadingComponent = () => {
    return <div> loading..... </div>
}

const Classify = Loadable({
    loader: () => import('../components/Classify'),
    loading: MyLoadingComponent
})
const Find = Loadable({
    loader: () => import('../components/Find'),
    loading: MyLoadingComponent
})
const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: MyLoadingComponent
})
const Mine = Loadable({
    loader: () => import('../components/Mine'),
    loading: MyLoadingComponent
})

export default {
    Classify,
    Find,
    Home,
    Mine
}
