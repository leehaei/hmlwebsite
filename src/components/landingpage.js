import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import resumepdf from '../images/ex.pdf'

class Landing extends Component {
  render() {
    return(
        <div>
            <div class="resume" id="home">
              <a style={{textAlign: 'center', textDecoration: 'none', color: '#A6A6A6', paddingLeft: '20px'}}  href={process.env.PUBLIC_URL + resumepdf} target="_blank">Resume</a>
            </div>
            <div class="exlinks">
              <a class="title" style={{textAlign: 'center', textDecoration: 'none', color: '#EFA500'}}>Haeim Lee.</a>
              <a class="subtitle" style={{textAlign: 'center', textDecoration: 'none', color: '#717070'}}>Computer Science and Finance student at the University of Waterloo</a>
              <a class="email" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="mailto:haeim01@gmail.com">Email</a>
              <a class="github" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://github.com/leehaei/">GitHub</a>
              <a class="linkedin" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://www.linkedin.com/in/haeimlee/">LinkedIn</a>
              <a class="instagram" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://www.instagram.com/haeim_hl/">Instagram</a>
              <a class="youtube" style={{textAlign: 'right', textDecoration: 'none', color: '#4B4668'}} href="https://www.youtube.com/channel/UClhxNBjYFv5iOYFvdbk7SHA">Youtube</a>
              <a class="rectangle" style={{textAlign: 'center', textDecoration: 'none'}}></a> 
            </div>
           <div class="arrow">
              <span class="material-icons" style={{color: "#4E4E4E"}}>arrow_downward</span>
            </div>
        </div>
    )
  }
}

export default Landing;