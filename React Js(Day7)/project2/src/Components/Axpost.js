import React, { Component } from 'react';
import axios from 'axios';

class Axpost extends Component {
    constructor() {
        super()
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }

    changeHandler =e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit= e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {
      const {userId, title, body}= this.state
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                <input 
                type='number'
                name='userId'
                value={userId}
                onChange={this.changeHandler}
                />
                </div>
                <div>
                <input 
                type='text'
                name='title'
                value={title}
                onChange={this.changeHandler}
                />
                </div>
                <div>
                <input 
                type='text'
                name='body'
                value={body}
                onChange={this.changeHandler}
                />
                </div>
                <input type='submit' value='Submit'/>
            </form>

        </div>
    )
  }
}
export default Axpost
