import React from "react";


class Test extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { hello : "Developer!!" };
    }
 
    componentWillMount()
    {
        console.log("componentWillMount()");
    }
 
    componentDidMount()
    {
        console.log("componentDidMount()");
    }
 
    changeState()
    {
        this.setState({ hello : "Dev!! State is changed" });
    }
 
    render()
    {
        return (
            <div>
            <h1>Hello { this.state.hello }</h1>
            <h2>
            <a onClick={this.changeState.bind(this)}>Press Here!</a>
            </h2>
            </div>);
    }

    componentWillReceiveProps(newProps) {      
        console.log('Component Will Recieve Props!')  
    } 
 
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate()");
        return true;
    }
 
    componentWillUpdate()
    {
        console.log("componentWillUpdate()");
    }
 
    componentDidUpdate()
    {
        console.log("componentDidUpdate()");
    }
    componentWillUnmount() {  
        console.log('Component Will UNMOUNT!')  
    }
}

export default Test