import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Projects from './components/projects'
import resume from './images/Haeim_Lee_Resume.pdf';

class App extends Component {
  render() {
    return (
      <div class="page-content" style={{overflow: 'scroll'}}>
        <div>
          <Main/>
          <Projects/> 
        </div>
        <footer class="mdl-mini-footer">
          <div class="mdl-mini-footer__middle-section">
            <ul class="mdl-mini-footer__link-list">
              <li>
              <p class="mdl-navigation__link" style={{color: 'lightgrey'}}>By Haeim Lee</p>
              </li>
              <li>
              <a class="mdl-navigation__link" href="#projects">Projects</a>
              </li>
              <li>
              <a class="mdl-navigation__link" href={process.env.PUBLIC_URL + resume} rel="noopener noreferrer" target="_blank">Resume</a>
              </li>
              <li>
              <a class="mdl-navigation__link" href="#home">Back to Top</a>
              </li>
            </ul>
          </div>
        </footer>      
      </div>
    );
  }
}

export default App;
