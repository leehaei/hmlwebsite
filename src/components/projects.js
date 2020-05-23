import React, { Component } from "react";
 
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

class Projects extends Component {
  render() {
    return (
      <FadeInSection key={'bkg'}>
        <div class="bkg2">
      <div class="cards" id="projects">
        <div class="set-card-borders">

        <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text" style={{color: 'white', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.4)'}}>Welcome</h2>
              </div>
              <div class="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
                <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">W</span>
                <span class="mdl-chip__text">Work</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text" style={{color: 'white', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.4)'}}>Welcome</h2>
              </div>
              <div class="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
                <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">W</span>
                <span class="mdl-chip__text">Work</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text" style={{color: 'white', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.4)'}}>Welcome</h2>
              </div>
              <div class="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
              <span class="mdl-chip__contact mdl-color--green mdl-color-text--white">P</span>
                <span class="mdl-chip__text">Project</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text" style={{color: 'white', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.4)'}}>Welcome</h2>
              </div>
              <div class="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
                <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">W</span>
                <span class="mdl-chip__text">Work</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text" style={{color: 'white', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.4)'}}>Welcome</h2>
              </div>
              <div class="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
                <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">W</span>
                <span class="mdl-chip__text">Work</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title">
                <h2 class="mdl-card__title-text" style={{color: 'white', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.4)'}}>Welcome</h2>
              </div>
              <div class="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
                <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">W</span>
                <span class="mdl-chip__text">Work</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

        </div>
      </div>
    </div>
      </FadeInSection>
      
    );
  }
}
 
export default Projects;
