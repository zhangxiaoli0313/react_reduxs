import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

const mock = new AxiosMockAdapter(axios)
const List = require('./datas/datas.json')

const getData = () => {
    mock.onGet('/api/list').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, List])
        })
    })
}

export default getData
