import React, { Component } from 'react';
import axios from 'axios'

export default class Comments extends Component {
    constructor(props) {
        super()
        this.state={
            posts:[],
            errorMesg:''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMesg:'Error in fetching data'})
        })
    }
 
  render() {
      const {posts, errorMesg}= this.state
    return(
        <div>
            <h1>Lists Of Posts</h1>
            {posts.length ? posts.map(post => <div key={post.id}>{post.body}</div>)
            :null}
            {errorMesg ? <div>{errorMesg}</div> : null}
        </div>
    )
  }
}
