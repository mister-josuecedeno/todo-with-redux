import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';

const List = (props) => (
  <ul>
    {props.todos.map((todo, index) => (
      <li key={index}>
        <span>{todo.text}</span>
        <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(List);
