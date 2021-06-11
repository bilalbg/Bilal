import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
// import { AppContainer } from 'react-hot-loader';



ReactDOM.render(
  <Router>
    {/* <div  className='anim'> */}
        <App/>
    {/* </div> */}
  </Router>,
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
