// import React, {Component, useState} from 'react';
import React, {Component} from 'react';
import './App.css';
import Home from './pages';
import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Projects';
import Skills from './pages/Skills';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './pageTransitions/Transitions.scss'


export default function App() {
  const timeout ={
  appear: 500,
  enter: 500,
  exit: 400,
              };
  const pagepos= {
    '/':0,
    'about':1,
    'projects':2,
    'skills':3
  };
  return (
    <BrowserRouter >
      <Home >
        <Route 
          render = {
            ({location}) => {
              return (
              // <TransitionGroup className='anim' >
              //     <CSSTransition  
              //     key={location.pathname}
              //     classNames='example'
              //     timeout=
              //     { {
              //                enter: 600,
              //                exit: 300   } }
              //     unmountOnExit
              //     appear={true}
              //     enter={false}
              //     >
                    <Switch location={location}>
                      <Route exact path="/" component={Main} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/projects" component={Project} />
                      <Route exact path="/skills" component={Skills} />
                    </Switch>
                // </CSSTransition>
                // </TransitionGroup> 
                );
              }
            }
        />
       {/* <TransitionGroup className='app' >
          <CSSTransition  
          classNames='example' 
          timeout={timeout}
          unmountOnExit
          enter={false}
          >  
          <div > 
            <Switch >
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Project} />
              <Route exact path="/skills" component={Skills} />
            </Switch>
          </div>
         </CSSTransition>
        </TransitionGroup>  */}
      </Home>
    </BrowserRouter>
  );
}