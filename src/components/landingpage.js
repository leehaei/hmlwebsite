import React, { Component } from 'react';
import resumepdf from '../images/Haeim_Lee_Resume.pdf'

class Landing extends Component {
  render() {
    return(
        <div>
            <div class="resume" id="home">
              <a style={{textAlign: 'center', textDecoration: 'none', color: '#A6A6A6', paddingLeft: '20px'}}  href={process.env.PUBLIC_URL + resumepdf} rel="noopener noreferrer" target="_blank">Resume</a>
            </div>
            <div class="exlinks">
              <p class="title" style={{textAlign: 'center', textDecoration: 'none', color: '#EFA500'}}>Haeim Lee.</p>
              <p class="subtitle" style={{textAlign: 'center', textDecoration: 'none', color: '#717070'}}>Computer Science and Finance student at the University of Waterloo</p>
              <a class="email" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="mailto:haeim01@gmail.com"  rel="noopener noreferrer" target="_blank">Email</a>
              <a class="github" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://github.com/leehaei/"  rel="noopener noreferrer" target="_blank">GitHub</a>
              <a class="linkedin" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://www.linkedin.com/in/haeimlee/"  rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <a class="instagram" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://www.instagram.com/haeim_hl/"  rel="noopener noreferrer" target="_blank">Instagram</a>
              <a class="youtube" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://www.youtube.com/channel/UClhxNBjYFv5iOYFvdbk7SHA"  rel="noopener noreferrer" target="_blank">Youtube</a>
              <p class="rectangle" style={{textAlign: 'center', textDecoration: 'none'}}></p> 
            </div>
           <div class="arrow">
              <span class="material-icons" style={{color: "#4E4E4E"}}>arrow_downward</span>
            </div>
        </div>
    )
  }
}

export default Landing;