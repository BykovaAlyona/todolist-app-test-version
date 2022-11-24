import React from 'react';
import './style/App.scss';
import ToDoList from "./components/ToDoListComponent";
import SignIn from "./components/SignInComponent";
import { observer } from 'mobx-react';
import { changePage } from './store/';

function App() {
  const Page = changePage.signin === false ? SignIn : ToDoList;
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default observer(App);