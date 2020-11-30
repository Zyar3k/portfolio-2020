import data from "../../../data/db.json";

import "./Skills.scss";

const Skills = () => {
  const DB = data.skills[0];
  const frontSection = DB.frontContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <i className={item.icon} />
      <p>{item.name}</p>
    </div>
  ));
  const backSection = DB.backContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <i className={item.icon} />
      <p>{item.name}</p>
    </div>
  ));
  const toolsSection = DB.toolsContent.map((item, index) => (
    <div key={index} className='skillBox'>
      <i className={item.icon} />
      <p>{item.name}</p>
    </div>
  ));
  return (
    <section id='skills' className='pageSection'>
      <section className='pageContent container skillsContent'>
        <section className='skillsSection'>
          <h2>{DB.frontTitle.title}</h2>
          <div className='skillsWrapper'>{frontSection}</div>
        </section>
        <section className='skillsSection'>
          <h2>{DB.backTitle.title}</h2>
          <div className='skillsWrapper'>{backSection}</div>
        </section>
        <section className='skillsSection'>
          <h2>{DB.toolsTitle.title}</h2>
          <div className='skillsWrapper'>{toolsSection}</div>
        </section>
      </section>
    </section>
  );
};

export default Skills;
