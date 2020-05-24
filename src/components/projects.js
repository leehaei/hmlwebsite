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
              <div class="mdl-card__title" id="igm"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}>DevOps Co-op </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at IGM Financial </h2>
              <div class="mdl-card__supporting-text">
              Text
              <br/>
              <br/>
                Experience with .
              </div>
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
            <div class="mdl-card__title" id="statuscast-slack"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}> StatusCast and Slack Integration </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at IGM Financial</h2>
              <div class="mdl-card__supporting-text">
                Created a StatusCast and Slack Integration to allow teams to create StatusCast incidents through Slack forms.
                Incidents created through the integration are stored to later allow users to resolve or comment on the indcident through slack.
                <br/>
                <br/>
                Built with javascript, html, slack API, slack block kit and statuscast API.
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="hhttps://github.com/leehaei/statuscast-slack-integration" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
              <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">WP</span>
                <span class="mdl-chip__text">Work Project</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title" id="wichacks"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}>Women in Computing Hackathon </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at Rochester Institute of Technology</h2>
              <div class="mdl-card__supporting-text">
                Created a Nodejs webpage and iOS application using a Wegmans API where users are able to donate towards women and gender minorities in STEM.
                Users can use this site to track their purchases and donate a percentage amount towards a STEM program of their choice.
                <br/>
                <br/>
                Built with css, expressjs, html, javascript, nodejs, python, sketch, swift and xcode.
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://github.com/leehaei/WiCHacks-2020" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://devpost.com/software/wichack-github-io" rel="noopener noreferrer" target="_blank">
                DevPost
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
            <div class="mdl-card__title" id="unicost"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}> Hack the Valley 4 </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at University of Toronto</h2>
              <div class="mdl-card__supporting-text">
                Unicost is a website for students to be able to graph their debts and expenses to visually see how their short term actions affect them in the long term.
                The goal is to peak students' interest in their financial futures and help them make smart financial decisions.
                <br/>
                <br/>
                Built with css, expressjs, html, javascript, nodejs, mongodb, mongoose and plotly.
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://github.com/leehaei/HTV4" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://devpost.com/software/htv4" rel="noopener noreferrer" target="_blank">
                DevPost
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
            <div class="mdl-card__title" id="htn2"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}>Hack the North </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at University of Waterloo</h2>
              <div class="mdl-card__supporting-text">
                Created a 2D game, where you are a knight who was ordered by the king to find the person who has started the plague.
                You have to pick up evidence around town to force the truth out of the townspeople who often lie about their whereabouts
                <br/>
                <br/>
                Built with c++, sfml (simple and fast multimedia library), ubisoft nest API and visual studio.
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://github.com/leehaei/HTN_UbiGame" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://devpost.com/software/town-of-the-plagued" rel="noopener noreferrer" target="_blank">
                DevPost
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
              <div class="mdl-card__title" id="tribalscale"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}>Agile Software Test Engineer Co-op </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at TribalScale </h2>
              <div class="mdl-card__supporting-text">
              Effectively automate testing android apps using Appium and Selenium. 
              Tested applications including android apps, iOS apps and webpages to ensure all business requirements are met.
              Conducted multiple levels of testing including acceptance testing, smoke testing, regression testing, exploratory testing, automation tests and UI testing.
              <br/>
              <br/>
                Experience with Appium, Selenium, Pivotal Tracker, .
              </div>
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
            <div class="mdl-card__title" id="tshackathon"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}> TribalScale Hackathon </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at TribalScale</h2>
              <div class="mdl-card__supporting-text">
                  Text
                <br/>
                <br/>
                Built with Dialogflow.
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="hhttps://github.com/leehaei/statuscast-slack-integration" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <div class="mdl-card__menu">
              <span class="mdl-chip mdl-chip--contact">
              <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">WP</span>
                <span class="mdl-chip__text">Work Project</span>
            </span>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection key={'card'}>
        <div class="card">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title" id="moh"></div>
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover'}}>Software Engineer Co-op </h2>
              <h2 class="mdl-card__title-text" style={{color: 'Grey', backgroundSize: 'cover'}}> at Ontario Ministry of Health & Long-Term Care</h2>
              <div class="mdl-card__supporting-text">
              Automated database statistics using ELK for development and production.
              Created statistical reports for management and operations team.
              Automated full regression tests using SQL Developer, IBM Cognos Report Studio and Microsoft Excel.
              Programmed a user interface for viewing and sorting medical information as a team project using Angular 6.
              Presented and organized meetings for project development
              <br/>
              <br/>
                Experience with Linux, Elasticsearch, Logstash, Kibana, Filebeat, SQL Developer, IBM Cognos Report Studio, Microsoft Exel, Microsoft Powerpoint, Angular 6.
              </div>
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
