import React from 'react';
import './App.css';
import Home from './pages';
import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Projects';
import Experience from './pages/Experience';
import {BrowserRouter , Switch, Route} from 'react-router-dom';


export default function App() {

  return (
    <BrowserRouter >
      <Home >
        <Route 
          render = {
            ({location}) => {
              return (
                    <Switch location={location}>
                      <Route exact path="/" component={Main} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/experience" component={Experience} />
                      <Route exact path="/projects" component={Project} />
                    </Switch>
                );
              }
            }
        />
      
      </Home>
    </BrowserRouter>
  );
}