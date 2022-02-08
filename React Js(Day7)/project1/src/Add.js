import React, { Component } from 'react';  
class Add extends React.Component {  
  constructor(props) {  
      super(props);  
      this.state = {value: '', value2:''};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleChange2 = this.handleChange2.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({value:event.target.value});  
  }  
  handleChange2(event) {  
    this.setState({value2:event.target.value});  
} 
 
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <label>  
                Enter first Number:  
                <input type="number" value={this.state.value} onChange={this.handleChange} />  
            </label>  
            <label>  
                Enter first Number:  
                <input type="number" value={this.state.value2} onChange={this.handleChange2} />  
            </label> 
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default Add; 