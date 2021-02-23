import './App.css';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';

function App({ username }) {
  return (
    <>
      <div className='container'>
        <h1 className='title'>React-Redux Todo List</h1>
        <AddTodo />
        <List />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(App);
