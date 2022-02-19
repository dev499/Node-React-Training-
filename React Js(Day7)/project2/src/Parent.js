import React, { Component } from 'react'
import MemoComp from './Memo'
class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Dev'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Devil'
            })
        }, 2000)
    }
    render() {
        console.log('*********Parent Comp render************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}
export default Parent