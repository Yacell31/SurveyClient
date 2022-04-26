import './App.css';
import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header/Header';
import { UserForm } from './components/Forms/UserForm';
import { PetsCard } from './components/PetsCards/PetsCards';
import categories from './components/Data/PetsCategories'
import catIcon from "./images/cat20-128.webp"
import ReactDOM from "react-dom";
import {
   Routes,
  Route
} from "react-router-dom";
import { Test3 } from './components/Tests/Test3';
import { Test2 } from './components/Tests/Test2';
import { Test1 } from './components/Tests/Test1';
import { SurveyCategories } from './components/Categories/Categories';
//import { createBrowserHistory } from 'history';



//export const customHistory= createBrowserHistory();

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <UserForm location={""}/> } />
          <Route path="categories" element={ <SurveyCategories/> } />
      </Routes>
      </div>
  );
}

export default App;
