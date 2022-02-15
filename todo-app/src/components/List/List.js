import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions";

const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index} style={{fontFamily:'monospace', color:'burlywood', margin:'18px'}}>
          {todo.message}
          <button onClick={() => props.dispatch(deleteTodo(todo.id))}
          style={{backgroundColor: '#4CAF50',
            border:'none',
            color: 'white',
            textAlign: 'center',
            textDecoration: 'none',
            display:'inline-block',
            fontSize: '16px',
            margin: '2px 2px -22px 10px',
            cursor: 'pointer',
        }}
          >
            Delete
        </button>
        </li>
      ))}
    </ul>
  );
};

const mapStatetoProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStatetoProps)(List);
