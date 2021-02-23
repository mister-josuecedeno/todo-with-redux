import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

const AddTodo = (props) => (
  <>
    <form
      onSubmit={(e) => {
        e.preventDefault();

        let input = e.target.userInput.value;
        props.dispatch(addTodo(input));
        e.target.userInput.value = '';
      }}
    >
      <input type='text' name='userInput' />
      <button>Submit</button>
    </form>
  </>
);

export default connect()(AddTodo);
