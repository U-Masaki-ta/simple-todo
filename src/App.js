import React from 'react';
import './assets/css/App.css';
import Container from './compornents/Container'
import Header from './compornents/Header'

const App = () => (
  <>
    <Header />
    <Container items = {TODO_LIST} />
  </>
);

export default App;

const TODO_LIST = [
  {
    id : 1,
    todo : 'something',
    isDone : false,
  },
  {
    id : 2,
    todo : 'something',
    isDone : false,
  },
  {
    id : 3,
    todo : 'something',
    isDone : false,
  },
  {
    id : 4,
    todo : 'something',
    isDone : false,
  },
  {
    id : 5,
    todo : 'something',
    isDone : false,
  },
]