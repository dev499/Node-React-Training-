import React from "react";
import { connect } from "react-redux";
import {addTodo} from '../../actions'


const AddTodo = (props) => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        let input= e.target.userInput.value
        console.log(input)
        props.dispatch(addTodo(input));
        e.target.userInput.value=""
    }}>
      <input type="text" name="userInput" placeholder="Enter Your Todo's"/>
      <button>Submit</button>
    </form>
  );
};

export default connect()(AddTodo);
