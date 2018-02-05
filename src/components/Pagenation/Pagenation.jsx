import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class Pagenation extends Component {
    render () {
        return (
            <Pagination defaultCurrent={1} total={50} />
        )
    }
}
