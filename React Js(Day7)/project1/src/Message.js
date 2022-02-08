import React, {Component} from 'react'

class Message extends Component{
    constructor(props){
        super(props)
        this.state={
         counter:0,
        }
    
      }
      
      render(){
        return(
        <div>
          <p>You clicked {this.state.counter}</p>
          <button onClick={() => {this.setState({counter:this.state.counter + 1})}}>click me</button>
        </div>
        )
      }
}

export default Message

// constructor(props) {
//     super(props)
//     this.state = {
//         message:'Welcome to my Blog'
//     }
// }

// update() {
//     this.setState({
//         message:'Thanks For Subscribing'
//     })
// }

// render() {
//     return (
//         <div>
//             <h3>{this.state.message}</h3>
//             <button onClick={() => this.update()}>Click to Subscribe</button>
//         </div>
//     )
// }