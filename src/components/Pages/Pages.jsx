import React, { Component } from 'react'

export default class Pages extends Component{
    render () {
        const { children } = this.props
        return (
            <div>
                {children}
            </div>
        )
    }
}
