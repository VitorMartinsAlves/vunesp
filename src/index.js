import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Pmesp from './pages/pmsp'
import Admin from './pages/admin'
import Notfound from './pages/notfound'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const rotas = (
  <Router>
    <div>
      <Routes>
        <Route exact path='/vunesp' element={<App />} />
        <Route exact path='/vunesp/pmesp' element={<Pmesp />} />
        <Route exact path='/vunesp/admin' element={<Admin />} />
        <Route  element={<Notfound />} />
      </Routes>
    </div>
  </Router>
)

ReactDOM.render(
  rotas,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
