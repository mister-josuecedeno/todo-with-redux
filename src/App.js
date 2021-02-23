import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';

function App({ username }) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <AddTodo />
        <List />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(App);
