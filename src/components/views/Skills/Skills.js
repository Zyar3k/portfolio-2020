import "./Skills.scss";

const Skills = () => {
  return (
    <section id='skills' className='pageSection'>
      <section className='pageContent container skillsContent'>
        <section className='skillsSection'>
          <h2>FRONTEND</h2>
          <div className='skillsWrapper'>
            <div className='skillBox'>
              <i className='fab fa-html5' />
              <p>HTML</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-css3' />
              <p>CSS</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-sass' />
              <p>Sass</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-bootstrap' />
              <p>Bootstrap</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-js' />
              <p>JavaScript</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-react' />
              <p>React+Redux</p>
            </div>
          </div>
        </section>
        <section className='skillsSection'>
          <h2>BACKEND</h2>
          <div className='skillsWrapper'>
            <div className='skillBox'>
              <i className='fab fa-node' />
              <p>Node.js - Express</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-mdb' />
              <p>MongoDB</p>
            </div>
          </div>
        </section>
        <section className='skillsSection'>
          <h2>NARZĘDZIA</h2>
          <div className='skillsWrapper'>
            <div className='skillBox'>
              <i className='fab fa-git-alt' />
              <p>git</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-npm' />
              <p>npm</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-yarn' />
              <p>yarn</p>
            </div>
            <div className='skillBox'>
              <i className='fab fa-jira' />
              <p>Jira</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Skills;
