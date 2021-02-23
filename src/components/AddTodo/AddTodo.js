import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

const AddTodo = (props) => (
  <>
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault();

        let input = e.target.userInput.value;
        props.dispatch(addTodo(input));
        e.target.userInput.value = '';
      }}
    >
      <div className='form-group'>
        <input className='input' type='text' name='userInput' />
        <button className='btn'>Submit</button>
      </div>
    </form>
  </>
);

export default connect()(AddTodo);
