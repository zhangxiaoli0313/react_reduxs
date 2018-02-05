import React, { Component } from 'react';
import '../../App.css'
import Pagenation from '../Pagenation'

export default class Lists extends Component {
    render () {
        const {lists} = this.props
        console.log(lists)
        return (
            <div>
                <ul>
                    {
                        lists && lists.ids.map((val, ids) => {
                            return <li key={ids}>{val}</li>
                        })
                        
                    }
                </ul><br/>
                <ul>
                    {
                        lists && lists.name.map((val, ids) => {
                            return <li key={ids}>{val}</li>
                        })
                        
                    }
                </ul><br/>
                <ul>
                    {
                        lists && lists.remark.map((val, ids) => {
                            return <li key={ids}>{val}</li>
                        })
                        
                    }
                </ul><br/>
                <ul>
                    {
                        lists && lists.sorts.map((val, ids) => {
                            return <li key={ids}>{val}</li>
                        })
                        
                    }
                </ul><br/>
                <ul>
                    {
                        lists && lists.states.map((val, ids) => {
                            return <li key={ids}>{val}</li>
                        })
                        
                    }
                </ul><br/>
                <Pagenation/>
            </div>
        )
    }
}