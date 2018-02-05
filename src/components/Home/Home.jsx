import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {getData} from '../../store/actions/home'
import Pages from '../Pages'
import Lists from '../Lists'

class Home extends Component {
    componentDidMount () {
        const { dispatch } = this.props
        axios.get('/api/list')
        .then ((res) => {
            dispatch(getData(res.data))
        })
    }
    render () {
        const { List } = this.props
        return (
            <div>
                <Pages>
                    <Lists lists = { this.props.List }></Lists>
                </Pages>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        List: state.total
    }
}

export default connect(mapStateToProps)(Home)
