import React, { Component } from 'react';  
  
class CompLifeCycle extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {hello: "Dev Agarwal"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({hello:"Dev!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
export default CompLifeCycle;  
// import React, { Component } from 'react'

// export default class ConForm extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then(
//         (response) => response.json()
//     ).then(data => this.setState({data: data}))

//   }

//   render() {
//     return (
//       <div>
//        <p>This will print all the name available in API users data</p>
//     {this.state.data.map(d=> <h3 key={d.id}>{d.name}</h3>)}
//       </div>
//     )
//   }
// }