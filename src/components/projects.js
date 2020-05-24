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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}>DevOps Co-op </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at IGM Financial, 2020</h2>
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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}> StatusCast and Slack Integration </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at IGM Financial, 2020</h2>
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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}>Women in Computing Hackathon </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at Rochester Institute of Technology, 2020</h2>
              <div class="mdl-card__supporting-text">
                Created a Nodejs webpage and iOS application using a Wegmans API where users are able to donate towards women and gender minorities in STEM.
                Users can use this site to track their purchases and donate a percentage amount towards a STEM program of their choice.
                <br/>
                <br/>
                Built with css, expressjs, html, javascript, nodejs, python, sketch, heroku, swift and xcode.
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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}> Hack the Valley 4 </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at University of Toronto, 2020</h2>
              <div class="mdl-card__supporting-text">
                Unicost is a website for students to be able to graph their debts and expenses to visually see how their short term actions affect them in the long term.
                The goal is to peak students' interest in their financial futures and help them make smart financial decisions.
                <br/>
                <br/>
                Built with css, expressjs, html, javascript, nodejs, mongodb, mongoose, heroku and plotly.
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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}>Hack the North </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at University of Waterloo, 2019</h2>
              <div class="mdl-card__supporting-text">
                'Town of the Plagued' is a 2D game, where you, a knight is ordered by the king to find the person who has started the plague.
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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}>Agile Software Test Engineer Co-op </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at TribalScale, 2019</h2>
              <div class="mdl-card__supporting-text">
              Effectively automated testing android apps using Appium and Selenium. 
              Tested applications including android apps, iOS apps and webpages to ensure all business requirements are met.
              Conducted multiple levels of testing including acceptance testing, smoke testing, regression testing, exploratory testing, automation tests and UI testing.
              <br/>
              <br/>
                Experience with appium, selenium, pivotal tracker, application testing, slack API, java, javascript.
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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}> TribalScale Hackathon </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at TribalScale, 2019</h2>
              <div class="mdl-card__supporting-text">
                  Stopover is an android application creating during TribalScale's company wide Hackathon.
                  The application is to be used during flight stopovers for users to be able to search for nearby tourist attractions.
                  By using dialogflow, the application is able to decipher the user's searches and communicate with the user in a conversational manner.
                <br/>
                <br/>
                Built with dialogflow, principle, adobe after effects, lottie and android studio.
              </div>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://github.com/leehaei/TSHackathon2019" rel="noopener noreferrer" target="_blank">
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
              <h2 class="mdl-card__title-text" style={{color: 'Black', backgroundSize: 'cover', textAlign: 'right'}}>Software Engineer Co-op </h2>
              <h2 class="mdl-card__subtitle-text" style={{color: 'Grey', backgroundSize: 'cover', textAlign: 'right'}}> at Ontario Ministry of Health & Long-Term Care, 2018</h2>
              <div class="mdl-card__supporting-text">
              Automated database statistics using ELK for development and production.
              Created statistical reports for management and operations team.
              Automated full regression tests using SQL Developer, IBM Cognos Report Studio and Microsoft Excel.
              Programmed a user interface for viewing and sorting medical information as a team project using Angular 6.
              Presented and organized meetings for project development
              <br/>
              <br/>
                Experience with linux, elasticsearch, logstash, kibana, filebeat, SQL developer, IBM cognos report studio, excel, powerpoint and angular 6.
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
